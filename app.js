const express = require('express')
const app = express()
const port = 3000
const mockjs = require('mockjs');
app.use(express.static('public'))
let datas = mockjs.mock(
    {
        'list|100': [
            {
                'id|+1': 1,
                'title': '@csentence'
            }
        ]
    }
)

app.get('/data', (req, res) => {
    let curr = req.query.curr;
    let limit = req.query.limit;
    let start = (curr - 1) * limit;
    let end = curr * limit;
    res.send(datas.list.slice(start, end))
})
app.listen(port, () => console.log(port))
