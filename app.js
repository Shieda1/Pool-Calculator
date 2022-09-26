// https://www.omnicalculator.com/construction/pool

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const poolvolumeRadio = document.getElementById('poolvolumeRadio');
const widthRadio = document.getElementById('widthRadio');
const lengthRadio = document.getElementById('lengthRadio');
const depth1Radio = document.getElementById('depth1Radio');
const depth2Radio = document.getElementById('depth2Radio');

let poolvolume;
let width = v1;
let length = v2;
let depth1 = v3;
let depth2 = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

poolvolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Width';
  variable2.textContent = 'Length';
  variable3.textContent = 'Depth 1';
  variable4.textContent = 'Depth 2';
  width = v1;
  length = v2;
  depth1 = v3;
  depth2 = v4;
  result.textContent = '';
});

widthRadio.addEventListener('click', function() {
  variable1.textContent = 'Pool volume';
  variable2.textContent = 'Length';
  variable3.textContent = 'Depth 1';
  variable4.textContent = 'Depth 2';
  poolvolume = v1;
  length = v2;
  depth1 = v3;
  depth2 = v4;
  result.textContent = '';
});

lengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Pool volume';
  variable2.textContent = 'Width';
  variable3.textContent = 'Depth 1';
  variable4.textContent = 'Depth 2';
  poolvolume = v1;
  width = v2;
  depth1 = v3;
  depth2 = v4;
  result.textContent = '';
});

depth1Radio.addEventListener('click', function() {
  variable1.textContent = 'Pool volume';
  variable2.textContent = 'Width';
  variable3.textContent = 'Length';
  variable4.textContent = 'Depth 2';
  poolvolume = v1;
  width = v2;
  length = v3;
  depth2 = v4;
  result.textContent = '';
});

depth2Radio.addEventListener('click', function() {
  variable1.textContent = 'Pool volume';
  variable2.textContent = 'Width';
  variable3.textContent = 'Length';
  variable4.textContent = 'Depth 1';
  poolvolume = v1;
  width = v2;
  length = v3;
  depth1 = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(poolvolumeRadio.checked)
    result.textContent = `Pool volume = ${computepoolvolume().toFixed(2)}`;

  else if(widthRadio.checked)
    result.textContent = `Width = ${computewidth().toFixed(2)}`;

  else if(lengthRadio.checked)
    result.textContent = `Length = ${computelength().toFixed(2)}`;

  else if(depth1Radio.checked)
    result.textContent = `Depth 1 = ${computedepth1().toFixed(2)}`;

  else if(depth2Radio.checked)
    result.textContent = `Depth 2 = ${computedepth2().toFixed(2)}`;
})

// calculation

// poolvolume = length * width * (depth1 + depth2) / 2

function computepoolvolume() {
  return (Number(length.value) * Number(width.value) * (Number(depth1.value) + Number(depth2.value)) / 2) * 1000;
}

function computewidth() {
  return ((Number(poolvolume.value) / 1000) * 2) / (Number(length.value) * (Number(depth1.value) + Number(depth2.value)));
}

function computelength() {
  return ((Number(poolvolume.value) / 1000) * 2) / (Number(width.value) * (Number(depth1.value) + Number(depth2.value)));
}

function computedepth1() {
  return (((Number(poolvolume.value) / 1000) * 2) / (Number(length.value) * Number(width.value))) - Number(depth2.value);
}

function computedepth2() {
  return (((Number(poolvolume.value) / 1000) * 2) / (Number(length.value) * Number(width.value))) - Number(depth1.value);
}