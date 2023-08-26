        function lihat(){
              let aku =  document.getElementById('aku').value;
              let compt  = Math.random();
              let hasil = '';
              if(compt < 0.1){
                 compt  =  '✋';
              } else if (compt >0.1 && compt < 0.3){
                 compt  = '✌';
              }else {
                 compt  = '✊';
              }
              if( aku ==  compt ){
                 hasil = ' HASIL NYA ADALAH SERI';
              }else if(aku == '✋' ) {
                 hasil = (compt  ==  '✌') ?  'KAMU KALAH' : 'KAMU MENANG';
              }else if(aku == '✌' ) {
                 hasil = (compt  ==  '✋') ? 'KAMU MENANG' : 'KAMU KALAH';
              }else if(aku == '✊' ) {
                 hasil = (compt ==  '✌') ? 'KAMU MENANG' : 'KAMU KALAH';
              }else if (aku == "") {
                alert("MASUKAN PILIHANMU")
              }else{
                 hasil  ='ANDA MEMASUKAN PILIHAN YANG SALAH';
              }
              document.getElementById("akuo").innerHTML= ""+aku;
              document.getElementById("compto").innerHTML= ""+compt;
              document.getElementById("output").innerHTML ="" +hasil;
              console.log(aku , "LAWAN" , compt , hasil)
        }