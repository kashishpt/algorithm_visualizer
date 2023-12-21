export async function bubbleSort(bars, updateBars, speed) {
    toggleBottons()

    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - 1 - i; j++) {
            await new Promise(resolve => setTimeout(resolve, speed));
            changeClass(bars, j, 'observing')
            changeClass(bars, j+1, 'observing')

            if (bars[j+1].props.height < bars[j].props.height) {
                let barsTemp = [...bars]
                let temp = barsTemp[j]
                barsTemp[j] = barsTemp[j+1]
                barsTemp[j+1] = temp
                bars = [...updateBars(barsTemp)]
            }

            
            await new Promise(resolve => setTimeout(resolve, speed));
            changeClass(bars, j, '')
            changeClass(bars, j+1, '')

            if (j === bars.length - 2 - i) {
                changeClass(bars, j+1, 'sorted')
            }
        }
    }
    changeClass(bars, 0, 'sorted')

    toggleBottons()
}

export async function selectionSort(bars1, updateBars, speed) {
    toggleBottons()
    let sorted = new Set()
    let bars = [...bars1]


    for (let i = 0; i < bars.length - 1; i++) {
        let min = i

        for (let j = i + 1; j < bars.length; j++) {
            const i1 = j
            const i2 = min
            
            await new Promise(resolve => setTimeout(resolve, speed));
            if (!sorted.has(bars[i1].props.id) && !sorted.has(bars[i2].props.id)) {
                changeClass(bars, i1, 'observing')
                changeClass(bars, i2, 'observing')
            }
            

            if (bars[j].props.height < bars[min].props.height) {
                min = j
            }

            await new Promise(resolve => setTimeout(resolve, speed));
            changeClass(bars, i1, '')
            changeClass(bars, i2, '')
        }

        let temp = bars[min]
        bars[min] = bars[i]
        bars[i] = temp
        bars = [...updateBars(bars)]
        changeClass(bars, i, 'sorted')

    }

    toggleBottons()
}

function toggleBottons() {
    for (let button of document.getElementsByClassName('sorting-button')) {
        button.disabled = !button.disabled
    }

    for (let button of document.getElementsByTagName('input')) {
        button.disabled = !button.disabled
    }
}

function changeClass(bars, index, newClass) {
    document.getElementById(index + '-solid').className = 'bar ' + newClass
    document.getElementById(index + '-highlight').className = 'bar-highlight ' + newClass
}