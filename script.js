(function(){
  var fmt=function(n){return 'K'+Math.round(n).toLocaleString('en-US');};
  var amount=document.getElementById('amount'),err=document.getElementById('r-error');
  if(amount){
  function calc(){
    var t=document.querySelector('input[name=term]:checked'),a=parseFloat(amount.value),rate=+t.dataset.rate;
    if(!(a>=1000)){err.textContent='Enter an amount of K1,000 or more.';return;}
    err.textContent='';
    var i=a*rate/100;
    document.getElementById('r-principal').textContent=fmt(a);
    document.getElementById('r-interest').textContent=fmt(i);
    document.getElementById('r-total').textContent=fmt(a+i);
  }
  amount.addEventListener('input',calc);
  document.getElementById('terms').addEventListener('change',calc);
  calc();
  }

  var form=document.getElementById('apply-form');
  if(form)form.addEventListener('submit',function(e){
    e.preventDefault();
    var n=document.getElementById('name').value.trim(),a=document.getElementById('a-amount').value,msg=document.getElementById('form-msg');
    if(!n||!(a>=1000)){msg.textContent='Enter your name and an amount of K1,000 or more.';return;}
    msg.textContent='';
    var text='Hello MBCS Cash Express Loans, I would like a loan.\nName: '+n+'\nAmount: K'+a+'\nTerm: '+document.getElementById('a-term').value+'\nCollateral: '+document.getElementById('a-item').value;
    window.open('https://wa.me/260973444422?text='+encodeURIComponent(text),'_blank','noopener');
  });
})();
