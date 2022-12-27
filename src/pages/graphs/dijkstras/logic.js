export let start = ''
export let target = ''
export let action = 'start'
export let mouseDown = false
export const height = 600
export const width = 1200
export const node_size = 25


document.body.onmousedown = () => mouseDown = true
document.body.onmouseup = () => mouseDown = false

export function setVertex(vertex) {
    let element = document.getElementById(vertex)
    if (action === 'start') {
        erase(start)
        start = vertex
        element.className = 'vertex start'
    } else if (action === 'target') {
        erase(target)
        target = vertex
        element.className = 'vertex target'
    } else if (action === 'wall') {
        if (vertex === start) {
            start = ''
        } else if (vertex === target) {
            target = ''
        }
        element.className = 'vertex wall'
    } else if (action === 'erase') {
        erase(vertex)
    }
    
}

export function setAction(newAction) {
    action = newAction
}

export function erase(id) {
    let element = document.getElementById(id)
    if (element !== null) {
        element.className = 'vertex'
    }

    if (start === id) {
        start = ''
    } else if (target === id) {
        target = ''
    }
    
}

export function randomObstacles() {
    clearJunk(true)
    for (let vertex of [...document.getElementsByClassName('vertex')]) {
        if (vertex.className != 'vertex start' && vertex.className != 'vertex target' && Math.floor(Math.random()*15) < 5) {
            vertex.className = 'vertex wall'
        }
    }
}

export function dijkstras() {

    if (start === '' || target === '') {
        alert('You must select a start and target vertex')
        return
    }

    document.getElementById(start).className = 'vertex start'

    const timeDelay = 10

    function getDirection(s, e) {
        let s_coords = s.split('-')
        let e_coords = e.split('-')
        let sy = parseInt(s_coords[0])
        let sx = parseInt(s_coords[1])
        let ey = parseInt(e_coords[0])
        let ex = parseInt(e_coords[1])

        if (ey > sy) { // down
            return 'down'
        } else if (ey < sy) { // up
            return 'up'
        } else if (ex > sx) { // right
            return 'right'
        } else { // left
            return 'left'
        }

    }

    clearJunk(false)

    if (start !== '' && target !== '') {
        let preds = {}
        let visited = new Set()
        let nextUp = [start]

        let timeOutMultiplier = 1
        let found = false
        while (nextUp.length !== 0 && !found) {
            let cur = nextUp.shift()
            visited.add(cur)

            let nextProcessed = []
            for (let neighbor of neighbors(cur)) {
                if (neighbor === target) {
                    preds[target] = cur
                    found = true
                } else if (!visited.has(neighbor) && !nextUp.includes(neighbor) && document.getElementById(neighbor).className !== 'vertex wall') {
                    nextProcessed.push(neighbor)
                    preds[neighbor] = cur
                    nextUp.push(neighbor)
                }
            }

            setTimeout(() => {
                for (let neighbor of nextProcessed) {
                    if (neighbor !== start && neighbor !== target) {
                        document.getElementById(neighbor).className = 'vertex searched'
                    }
                }
            }, timeDelay*timeOutMultiplier++)
        }
        
        setTimeout(() => {
            let cur = preds[target]
            let path = []
            while (cur !== start) {
                path.push(cur)
                cur = preds[cur]
            }
            const length = path.length
            let prev = start
            cur = path.pop()
            for (let i = 0; i < length + 1; i++) {
                setTimeout(() => {
                    if (cur !== start) {
                        let direction = getDirection(prev, cur)
                        
                        document.getElementById(prev).className = 'vertex trail'
                        document.getElementById(cur).className = 'vertex path ' + direction
                    }
                    prev = cur
                    cur = path.pop()
                }, 70*i)
            }
        }, timeDelay*timeOutMultiplier + 10)
        

    }
}

function neighbors(vertex) {
    const rightEdge = width/25
    const bottomEdge = height/25
    const coords = vertex.split('-')
    const r = parseInt(coords[0])
    const c = parseInt(coords[1])
    let n = []
    if (r + 1 < bottomEdge) {
        n.push(`${r+1}-${c}`)
    }
    if (c + 1 < rightEdge) {
        n.push(`${r}-${c+1}`)
    }
    if (r - 1 >= 0) {
        n.push(`${r-1}-${c}`)
    }
    if (c - 1 >= 0) {
        n.push(`${r}-${c-1}`)
    }
    return n
}

export function clearJunk(walls) {
    for (let vertex of [...document.getElementsByClassName('vertex')]) {
        let className = vertex.className
        if (!className.includes('start') 
            && !className.includes('target')
            && !className.includes('wall')) {
            vertex.className = 'vertex'
        } else if (className.includes('wall') && walls) {
            vertex.className = 'vertex'
        }
    }
}

