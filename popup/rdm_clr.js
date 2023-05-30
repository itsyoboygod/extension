            // const id__report = document.getElementById("id__report")
            const id__veryfied = document.getElementById("id_report_data")
    
            // var colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
            var colors = ['red', 'blue', 'green', 'purple']
            var rando = () => colors[Math.floor(Math.random() * colors.length)]
            // id__report?id__report.style.color = `${rando()}`:""
            id__veryfied?id__veryfied.style.color = `${rando()}`:"red"
            // console.log(rando(colors[0]))