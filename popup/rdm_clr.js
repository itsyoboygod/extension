    // const data = document.getElementById('test')

    // data = (e) => {
    //     const colors = ['red', 'green', 'orange', 'white', 'black', 'salmon']
    //     const rando = () => colors[Math.floor(Math.random() * colors.length)]
    //     document.documentElement.style.cssText = `
    //         --rdm-clr: ${rando()};
    // `
    // }

    
    // svg.onclick = (e) => {
        //     const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
        //     const rando = () => colors[Math.floor(Math.random() * colors.length)]
    //         document.documentElement.getElementById('test').style.backgroundColor = `
    //             --rdm-clr: ${rando()};
    //         `
    // }
    
    
    var svg = document.getElementById('test')
    // svg?.addEventListener('click', function onClick(event) {
    svg = (e) => {
        const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
        const rando = () => colors[Math.floor(Math.random() * colors.length)]
        document.documentElement.style.cssText = `
                --rdm-clr: ${rando()}
            `
            console.log(rando(colors[0]))
        };