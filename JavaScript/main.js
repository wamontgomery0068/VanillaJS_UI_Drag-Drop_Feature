const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Loop through empties and call drag events
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Drag Functions
function dragStart() {
    // console.log('start');
    this.class += 'hold';
    setTimeout(()=>(this.className = 'invisible'), 0);
} 

function dragEnd(e) {
    // console.log('end');
    this.className = 'fill';
    e.preventDefault();
}

function dragOver(e) {
    // console.log('over');
    e.preventDefault();

}

function dragEnter(e) {
    // console.log('enter');
    e.preventDefault();
    this.class += 'hovered';
}

function dragLeave(e) {
    // console.log('leave');
    e.preventDefault();
    this.className = 'empty';
}

function dragDrop() {
    // console.log('drop');
    this.className = 'empty';
    this.append(fill);
}