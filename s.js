


const form = document.querySelector('form');
const input = document.querySelector('input');
const player = document.getElementById('player');
const preview = document.getElementById('preview');
let text;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    text = input.value;
    input.value = '';



    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=' + text + '&type=video')
        .then((Response) => Response.json())
        .then((data) => {
            function createFrame(path) {
    if (document.getElementById('iframe')){
        document.getElementById('iframe').remove(); 
        document.querySelectorAll('.pre').forEach(Element => Element.remove());
    } 
       
                let iframe = document.createElement('iframe');
                iframe.src = 'https://www.youtube.com/embed/' + path;
                iframe.frameBorder = '0';
                iframe.allow = 'autoplay;encrypted-media';
                iframe.allowFullscreen;
                iframe.width = '560px';
                iframe.height = '315px';
                iframe.id = 'iframe';
                player.append(iframe);
                for (let i = 0; i < 5; i++) {
                    let preImg = document.createElement('img');
                    preImg.src = data.items[i].snippet.thumbnails.default.url;
                    preImg.classList = 'pre';
                    preview.append(preImg);
                    pc();
                }
            }
            createFrame(data.items[0].id.videoId);

            function pc () {
            document.querySelectorAll('img').forEach(Element => {
                Element.addEventListener('click', () => {
                    for (let i = 0; i < 5; i++) {
                        if (Element.src == data.items[i].snippet.thumbnails.default.url) {
                            createFrame(data.items[i].id.videoId);
                        }
}
                })
            })                
            }




        })
})


