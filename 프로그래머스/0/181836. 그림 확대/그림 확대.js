function solution(picture, k) {
    const answer = [];

    for (let i=0; i<picture.length; i++) {
        const item = picture[i];
        let line = '';

        // console.log('item', item);

        for (let j=0; j<item.length; j++) {
            const char = item[j];

            // console.log('char', char);

            for (let l=0; l<k; l++) {
                if (char === '.') {
                    line += '.';
                }
                if (char === 'x') {
                    line += 'x';
                }
            }

            console.log('line', line);
        }

        for (let l=0; l<k; l++) {
            answer.push(line);
        }
    }

    return answer;
}