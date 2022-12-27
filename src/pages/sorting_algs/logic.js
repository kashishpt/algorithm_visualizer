export async function bubbleSort(bars1, updateBars) {
    let bars = [...updateBars(bars1)]
    for (let i = 0; i < bars1.length - 1; i++) {
        for (let j = 0; j < bars1.length - 1 - i; j++) {
            await new Promise(resolve => setTimeout(resolve, 20));
            document.getElementById(bars[j].props.id).className = 'bar observing'
            document.getElementById(bars[j+1].props.id).className = 'bar observing'

            if (bars[j+1].props.height < bars[j].props.height) {
                let barsTemp = [...bars]
                let temp = barsTemp[j]
                barsTemp[j] = barsTemp[j+1]
                barsTemp[j+1] = temp
                bars = [...updateBars(barsTemp)]
            }

            
            await new Promise(resolve => setTimeout(resolve, 20));
            document.getElementById(bars[j].props.id).className = 'bar'
            document.getElementById(bars[j+1].props.id).className = 'bar'

            if (j === bars.length - 2 - i) {
                document.getElementById(bars[j+1].props.id).className = 'bar sorted'
            }
        }
    }
    document.getElementById(bars[0].props.id).className = 'bar sorted'
}

export async function test() {
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log('here')

}