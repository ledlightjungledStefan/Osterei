function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsArrayBuffer(file);
    })
}

function arrayBufferToString(arrayBuffer, decoderType = 'utf-8') {
    let decoder = new TextDecoder(decoderType);
    return decoder.decode(arrayBuffer);
}

async function processFile(file) {
    try {
        let arrayBuffer = await readFileAsync(file);
        let first20Bytes = arrayBufferToString(arrayBuffer);
        const allLines = first20Bytes.split("\n");

        const lineOne = allLines;

        //let iceCreamFlavors = [lineOne[0], lineOne[2]];

        //iceCreamFlavors.push(lineOne[4]);

        document.getElementById('resultOne').innerText = lineOne[0];

        document.getElementById('resultTwo').innerText = lineOne[2];

        document.getElementById('resultThree').innerText = lineOne[4];

        document.getElementById('resultFour').innerText = lineOne[6];

        document.getElementById('resultFive').innerText = lineOne[8];

    } catch (err) {
        console.log(err);
    }
}

document.getElementById('readBtn').addEventListener('click', () => {
    let file = document.getElementById('fileInput');
    processFile(file.files[0]);
})

document.addEventListener("DOMContentLoaded", () => {
    let options = {
        root: null,
        rootMargin: "-250px -50px",
        threshold: 0.05
    };
    let observer = new IntersectionObserver(beTouching, options);
    document.querySelectorAll(" .container p").forEach(p => {
        observer.observe(p);
    });
});
function beTouching(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // observer.unobserve(entry, target);
        } else {
            entry.target.classList.remove("active");
        }
    })
}
