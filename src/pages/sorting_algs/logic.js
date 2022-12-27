import Bar from "./components/Bar"


export function bubbleSort(bars, updateBars) {
    let steps = 0
    // console.log(bars[0])
    // console.log(bars[1].props.id)
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - 1 - i; j++) {
            setTimeout(() => {
                document.getElementById(bars[j].props.id).className = 'bar observing'
                document.getElementById(bars[j+1].props.id).className = 'bar observing'
                setTimeout(() => {
                    if (bars[j+1].props.height < bars[j].props.height) {
                        bars = [...bars]
                        let temp = bars[j]
                        bars[j] = bars[j+1]
                        bars[j+1] = temp
                        updateBars(bars)
                    }

                    document.getElementById(bars[j].props.id).className = 'bar'
                    document.getElementById(bars[j+1].props.id).className = 'bar'

                    if (j === bars.length - 2 - i) {
                        document.getElementById(bars[j+1].props.id).className = 'bar sorted'
                    }
                }, 20)
                
            }, 20*(steps))
            steps++
            
        }
    }
}