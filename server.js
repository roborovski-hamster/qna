const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.post("/skill", (req, res) => {

    console.log(JSON.stringify(req.body, null, 2));

    res.json({
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: "카카오 스킬 호출 성공"
                    }
                }
            ]
        }
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
