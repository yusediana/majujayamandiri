const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rute GET halaman HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rute POST untuk form kontak
app.post('/kontak', (req, res) => {
    const { nama, email, pesan } = req.body;

    // Di sini Anda bisa simpan ke database atau kirim email
    console.log("Pesan masuk:");
    console.log("Nama:", nama);
    console.log("Email:", email);
    console.log("Pesan:", pesan);

    // Kirim respon ke frontend
    res.send('Terima kasih, pesan Anda telah diterima!');
});

// Mulai server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

// Middleware untuk parsing form data
app.use(bodyParser.urlencoded({ extended: false }));

// Route untuk menerima form kontak
app.post('/kontak', async(req, res) => {
    const { nama, email, pesan } = req.body;


    // Email options
    let mailOptions = {
        from: `"${nama}" <${email}>`, // Dari nama dan email pengirim form
        to: 'majujayamandiri771@gmail.com', // Email tujuan (bisa email perusahaan)
        subject: `Pesan dari ${nama} via Form Kontak`,
        text: pesan,
        html: `<p>${pesan}</p><br><p>Dikirim oleh: ${nama} (${email})</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Pesan berhasil dikirim! Terima kasih sudah menghubungi kami.');
    } catch (error) {
        console.error('Gagal mengirim email:', error);
        res.status(500).send('Maaf, terjadi kesalahan saat mengirim pesan.');
    }
});