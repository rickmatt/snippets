// Prints the contents of the print-area class.
function printDiv(){
  var printContents = document.getElementsByClassName("print-area")[0].innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}

<button onclick="printDiv()">Print</button>