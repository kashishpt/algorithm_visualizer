export function bubbleSort(bars, updateBars) {
    let steps = 0
    // console.log(bars[0])
    // console.log(bars[1].props.id)
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - 1 - i; j++) {
            const barsNew = [...bars]
            setTimeout(() => {
                document.getElementById(barsNew[j].props.id).className = 'bar observing'
                document.getElementById(barsNew[j+1].props.id).className = 'bar observing'
                const bars2 = [...barsNew]
                setTimeout(() => {
                    if (bars2[j+1].props.height < bars2[j].props.height) {
                        let bars3 = [...bars2]
                        let temp = bars3[j]
                        bars3[j] = bars3[j+1]
                        bars3[j+1] = temp
                        updateBars(bars3)
                    }

                    document.getElementById(bars2[j].props.id).className = 'bar'
                    document.getElementById(bars2[j+1].props.id).className = 'bar'

                    if (j === bars2.length - 2 - i) {
                        document.getElementById(bars[j+1].props.id).className = 'bar sorted'
                    }
                }, 20)
                
            }, 20*(steps))
            steps++
            
        }
    }
}