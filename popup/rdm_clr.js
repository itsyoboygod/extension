            const id__report = document.getElementById("id__report")
            const id__test = document.getElementById("test")
    
            var colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
            var rando = () => colors[Math.floor(Math.random() * colors.length)]
            id__report?id__report.style.color = `${rando()}`:""
            id__test?id__test.style.color = `${rando()}`:""
            // console.log(rando(colors[0]))