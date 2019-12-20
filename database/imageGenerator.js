const Axios = require('axios');
const fs = require('fs');
const getImages = (id) => {
    const url = `https://avatars2.githubusercontent.com/u/${id}?s=360`;

    Axios({url,
        responseType: 'stream', })
        .then(
            response => new Promise((resolve, reject) => {
                response.data
                    .pipe(fs.createWriteStream(`images/pic${id}.jpg`))
                    .on('finish', () => resolve())
                    .on('error', e => reject(e));
            })
        )
};

(async () => {
    for (let i = 0; i < 1000; i++) {
        await getImages(i);
    }
})();


