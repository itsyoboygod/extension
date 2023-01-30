            const svg = document.getElementById("id__report")
    
            var colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
            var rando = () => colors[Math.floor(Math.random() * colors.length)]
            svg?svg.style.color = `${rando()}`:""
            // console.log(rando(colors[0]))