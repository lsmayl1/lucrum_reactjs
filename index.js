const express = require("express");
const multer = require("multer");
const { Pool } = require("pg");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000;
// CORS'u tüm domainlere aç (güvenlik gereksinimine göre değiştir)
app.use(cors());

// Eğer belirli domainlere izin vermek istersen:
const corsOptions = {
  origin: "http://localhost:3000", // veya izin vermek istediğin frontend URL'si
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
// PostgreSQL bağlantısı
const pool = new Pool({
  user: "ismayil",
  host: "84.247.180.115",
  database: "mydb",
  password: "Ismo19022006",
  port: 5432,
});

app.use(express.json());

// Multer yapılandırması (dosyalar "uploads" klasörüne kaydedilecek)
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Başlangıçta dosya ismini değiştirme
  },
});
const upload = multer({ storage });

// API Endpoint: HTML dosyası al, bilgileri oku, dosya adını değiştir ve kaydet
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "HTML dosyası gerekli!" });
    }

    let { forex_symbol, timeframe, strategy } = req.body;
    if (!forex_symbol || !timeframe || !strategy) {
      return res
        .status(400)
        .json({ message: "Forex sembolü, timeframe ve strateji gerekli!" });
    }

    // Dosyanın yeni ismini oluştur (örn: EURUSD-1H-Aggressive.html)
    const newFilename = `${forex_symbol}-${timeframe}-${strategy}.html`;
    const newPath = path.join(__dirname, "uploads", newFilename);

    // Dosya adını değiştir
    fs.renameSync(req.file.path, newPath);

    // PostgreSQL'e kaydet
    const result = await pool.query(
      "INSERT INTO files (filename, forex_symbol, timeframe, strategy) VALUES ($1, $2, $3, $4) RETURNING *",
      [newFilename, forex_symbol, timeframe, strategy]
    );

    res.json({
      message: "Dosya yüklendi ve isim değiştirildi!",
      file: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
});
app.get("/files", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM files ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Hata:", error);
    res.status(500).json({ message: "Sunucu hatası!" });
  }
});

app.get("/files/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "uploads", filename); // Dosya yolunu dinamik olarak oluştur

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Dosya bulunamadı:", err);
      return res.status(404).send("Dosya bulunamadı");
    }
    res.send(data); // Dosya içeriğini gönder
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
