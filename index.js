const request = require('request');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set("views", "public/views");
app.use(express.static("public"));

app.get('/:user*?', (req, res) => {
    let username = req.params.user;

    if(username) {
        request({
            url: 'https://api.github.com/users/' + username,
            headers: { 'User-Agent': 'Student-UA', 'Authorization': 'token ae8180eee09df886bbfe4d5b36e5b11dd4588ea7' }
        }, (err, response, body) => {
            if (err) {
                console.error(err);
            } else {
                const data = JSON.parse(body);

            }
        });
    } else {
        res.render('homepage');
    }
});

app.listen(3001);
