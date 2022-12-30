const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
const code = require('./api/code/code');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*"
}));

app.use('/api/code', code);

app.listen(PORT, () => {
    console.log(`Server started at port http://localhost:${PORT}`);
});


