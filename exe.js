const execute = document.getElementById("execute");
const result = document.getElementById("pcb");
const outputblock = document.getElementById("error");
const datablock = document.getElementById("datablock");
const memoryBlock = document.getElementById("memory");
const renew = document.getElementById('renew');
const instructionBlock = document.getElementById('instructionBlock');
const instBtn = document.getElementById('instBtn');
const closeBtn = document.getElementById('close');

instBtn.addEventListener("click",()=>{
  instructionBlock.style.display = "block";
});

closeBtn.addEventListener("click",()=>{
  instructionBlock.style.display = "none";
});


//@1st

let F = 0;
let L = 0;
let F_track  = F;


for(let i=0;i<10;i++){

  const divblock = document.createElement("div");
  divblock.style.display = "flex";
  divblock.style.height = "50px";
  if(i>0 && i%10 === 9){
    divblock.style.marginBottom = "100px";
  }
  else{
    divblock.style.marginBottom = "5px";
  }
  memoryBlock.appendChild(divblock);

  F_track = F;

  for(let j =0;j<20;j++)
  {

    const div = document.createElement("div");
    div.style.height = "50px";
    div.className = "byte";
    div.style.width = "50px";
    div.style.border = "2px solid gray";
    if(j === 4 || j === 8 || j === 12 || j === 16){
      F = F + 10;
      L = 0;
    }
    div.id = `${F}${L}`;
    div.innerText = div.id;
    L = L + 1;

    if(j === 4 || j === 8 || j === 12 || j === 16){
      div.style.marginLeft = "70px";
    }
    else{ 
      div.style.marginLeft = "10px";
    }
    divblock.appendChild(div);

  }
  F = F_track +  1; 
  L = 0;
}



//@2ND

F = 50;
L = 0;

for(let i=0;i<10;i++){

  const divblock = document.createElement("div");
  divblock.style.display = "flex";
  divblock.style.height = "50px";
  if(i>0 && i%10 === 9){
    divblock.style.marginBottom = "100px";
  }
  else{
    divblock.style.marginBottom = "5px";
  }
  memoryBlock.appendChild(divblock);

  F_track = F;

  for(let j =0;j<20;j++)
  {

    const div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.border = "2px solid gray";
    div.className = "byte";
    if(j === 4 || j === 8 || j === 12 || j === 16){
      F = F + 10;
      L = 0;
    }
    div.id = `${F}${L}`;
    div.innerText = div.id;
    L = L + 1;

    if(j === 4 || j === 8 || j === 12 || j === 16){
      div.style.marginLeft = "70px";
    }
    else{ 
      div.style.marginLeft = "10px";
    }
    divblock.appendChild(div);

  }
  F = F_track +  1; 
  L = 0;
}




//@3RD

F = 100;
L = 0;

for(let i=0;i<10;i++){

  const divblock = document.createElement("div");
  divblock.style.display = "flex";
  divblock.style.height = "50px";
  if(i>0 && i%10 === 9){
    divblock.style.marginBottom = "100px";
  }
  else{
    divblock.style.marginBottom = "5px";
  }
  memoryBlock.appendChild(divblock);

  F_track = F;

  for(let j =0;j<20;j++)
  {

    const div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.border = "2px solid gray";
    div.className = "byte";
    if(j === 4 || j === 8 || j === 12 || j === 16){
      F = F + 10;
      L = 0;
    }
    div.id = `${F}${L}`;
    div.innerText = div.id;
    L = L + 1;

    if(j === 4 || j === 8 || j === 12 || j === 16){
      div.style.marginLeft = "70px";
    }
    else{ 
      div.style.marginLeft = "10px";
    }
    divblock.appendChild(div);

  }
  F = F_track +  1; 
  L = 0;
}




//@4RD

F = 150;
L = 0;

for(let i=0;i<10;i++){

  const divblock = document.createElement("div");
  divblock.style.display = "flex";
  divblock.style.height = "50px";
  if(i>0 && i%10 === 9){
    divblock.style.marginBottom = "100px";
  }
  else{
    divblock.style.marginBottom = "5px";
  }
  memoryBlock.appendChild(divblock);

  F_track = F;

  for(let j =0;j<20;j++)
  {

    const div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.border = "2px solid gray";
    div.className = "byte";
    if(j === 4 || j === 8 || j === 12 || j === 16){
      F = F + 10;
      L = 0;
    }
    div.id = `${F}${L}`;
    div.innerText = div.id;
    L = L + 1;

    if(j === 4 || j === 8 || j === 12 || j === 16){
      div.style.marginLeft = "70px";
    }
    else{ 
      div.style.marginLeft = "10px";
    }
    divblock.appendChild(div);

  }
  F = F_track +  1; 
  L = 0;
}


//@5TH

F = 200;
L = 0;

for(let i=0;i<10;i++){

  const divblock = document.createElement("div");
  divblock.style.display = "flex";
  divblock.style.height = "50px";
  if(i>0 && i%10 === 9){
    divblock.style.marginBottom = "100px";
  }
  else{
    divblock.style.marginBottom = "5px";
  }
  memoryBlock.appendChild(divblock);

  F_track = F;

  for(let j =0;j<20;j++)
  {

    const div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.border = "2px solid gray";
    div.className = "byte";
    if(j === 4 || j === 8 || j === 12 || j === 16){
      F = F + 10;
      L = 0;
    }
    div.id = `${F}${L}`;
    div.innerText = div.id;
    L = L + 1;

    if(j === 4 || j === 8 || j === 12 || j === 16){
      div.style.marginLeft = "70px";
    }
    else{ 
      div.style.marginLeft = "10px";
    }
    divblock.appendChild(div);

  }
  F = F_track +  1; 
  L = 0;
}


//@6TH

F = 250;
L = 0;

for(let i=0;i<10;i++){

  const divblock = document.createElement("div");
  divblock.style.display = "flex";
  divblock.style.height = "50px";
  if(i>0 && i%10 === 9){
    divblock.style.marginBottom = "100px";
  }
  else{
    divblock.style.marginBottom = "5px";
  }
  memoryBlock.appendChild(divblock);

  F_track = F;

  for(let j =0;j<20;j++)
  {

    const div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.border = "2px solid gray";
    div.className = "byte";
    if(j === 4 || j === 8 || j === 12 || j === 16){
      F = F + 10;
      L = 0;
    }
    div.id = `${F}${L}`;
    div.innerText = div.id;
    L = L + 1;

    if(j === 4 || j === 8 || j === 12 || j === 16){
      div.style.marginLeft = "70px";
    }
    else{ 
      div.style.marginLeft = "10px";
    }
    divblock.appendChild(div);

  }
  F = F_track +  1; 
  L = 0;
}









renew.addEventListener("click",()=>{
  location.reload();
})

var buffer = [];

class opsys {
    constructor() {
      this.MM = new Array(300).fill(Array(4).fill('-'));
      this.IR = new Array(4).fill(' ');
      this.R = new Array(40).fill(' ');
      this.Ic = 0;
      this.si = 0;
      this.ti = 0;
      this.pi = 0;
      this.C = false;
      this.buffer = '';
      this.EM = 0;
      this.ptr = 0;
      this.rd = 0;
      this.function = '';
      this.opAdd = 0;
  
      this.pcb = {
        pid: 0,
        ttl: 0,
        tll: 0,
        ttc: 0,
        llc: 0,
      };
    }

    printPcb() {
        result.innerHTML = "";
        result.innerText = `Process ID: ${this.pcb.pid}\n\nTotal Time Limit: ${this.pcb.ttl}\tTotal Time Counter: ${this.pcb.ttc}\n\nTotal Line Limit: ${this.pcb.tll}\tTotal Line Counter: ${this.pcb.llc}\n`
    }
    
    Terminate() {
        this.printPcb();
    }

    errmsg(EM) {
        let error = '';
    
        switch (EM) {
          case 0:
            error = 'NO Error';
            console.log(error);
            outputblock.innerHTML = "";
            outputblock.innerText = error;
            break;
          case 1:
            error = 'Out Of Data';
            console.log(error);
            outputblock.innerHTML = "";
            outputblock.innerText = error;
            break;
          case 2:
            error = 'Line Limit Exceeded';
            console.log(error);
            outputblock.innerHTML = "";
            outputblock.innerText = error;
            break;
          case 3:
            error = 'Time Limit Exceeded';
            console.log(error);
            outputblock.innerHTML = "";
            outputblock.innerText = error;
            break;
          case 4:
            error = 'Operation Code Error';
            console.log(error);
            outputblock.innerHTML = "";
            outputblock.innerText = error;
            break;
          case 5:
            error = 'Operand Error';
            console.log(error);
            outputblock.innerHTML = "";
            outputblock.innerText = error;
            break;
          case 6:
            error = 'Invalid Page Fault';
            console.log(error);
            outputblock.innerHTML = "";
            outputblock.innerText = error;
            break;
        }
      }

    Write() {

        this.pcb.llc++;
        if (this.pcb.llc > this.pcb.tll) {
          this.errmsg(2);
          this.Terminate();
          throw new Error("This is an error message");
        }
    
        let sadd = this.rd;
        let eadd = sadd + 9;
        var outdata = "";
       
        for (let i = sadd; i <= eadd; i++) {
          for (let j = 0; j < 4; j++) {
           if (this.MM[i][j] !== '-' && this.MM[i][j] !== undefined) {
               outdata  = outdata + this.MM[i][j];
            }
          }
        }
        console.log("Dataout",outdata);
        datablock.innerHTML = "";
        datablock.innerText =  outdata;
      }
    
  

    Read(data) {

        if (data.length === 0) {
            this.errmsg(1);
            this.Terminate();
            throw new Error("This is an error message");
        }
        var row = this.rd;
        var dataArray = [];
        for(let i =0;i<data[0].length;i++){
          dataArray.push(data[0].charAt(i));
        }
        if(data[0].length < 4){
          while(dataArray.length < 4){
            dataArray.push('-');
          }
        }
        for(let k = row;k<=row+9;k++){
          for(let l = 0;l<4;l++){
            document.getElementById(`${k}${l}`).style.backgroundColor = "gray";
          }
        }
        this.MM[row] = dataArray;
        for(let k =0;k<4;k++){
          document.getElementById(`${row}${k}`).style.backgroundColor = "yellow";
          document.getElementById(`${row}${k}`).innerHTML = "";
          document.getElementById(`${row}${k}`).innerHTML = dataArray[k];
        }
      }

    isFree(fream_no) {
        let esf = 0;
        for (let i = fream_no * 10; i < fream_no * 10 + 9; i++) {
          for (let j = 0; j < 4; j++) {
            if (this.MM[i][j] !== '-') {
              esf = 1;
              break;
            }
          }
          if (esf === 0) {
            return true;
          } else {
            return false;
          }
        }
      }

      MOS(data) {

        if (this.ti === 0 && this.si === 1) {
          this.Read(data);
        }
        
        else if (this.ti === 0 && this.si === 2) {
          console.log("DataPhase2",this.MM[this.rd]);
          this.Write();
        } 
        
        else if (this.ti === 0 && this.si === 3 && this.pi === 0) {
          this.errmsg(0);
          this.Terminate();
          throw new Error("This is an error message");
        } 
        
        else if (this.ti === 2 && this.si === 1) {
          this.errmsg(3);
          this.Terminate();
          throw new Error("This is an error message");
          //process.exit(0);
        }
        
        else if (this.ti === 2 && this.si === 2) {
          this.Write();
          this.errmsg(3);
          this.Terminate();
          throw new Error("This is an error message");
         
        } 
        
        else if (this.ti === 2 && this.si === 3 && this.pi === 0) {
          this.errmsg(0);
          this.Terminate();
          throw new Error("This is an error message");
        } 
        else if (this.ti === 0 && this.pi === 1) {
          this.errmsg(4);
          this.Terminate();
          throw new Error("This is an error message");
        }
         else if (this.ti === 0 && this.pi === 2) {
          this.errmsg(5);
          this.Terminate();
          throw new Error("This is an error message");
        } 
        
        else if (this.ti === 0 && this.pi === 3) {
          if (this.function === 'GD') {

           
            var fream_no = Math.floor(Math.random() * 30);
            
            var progce = [];
            progce.push('0');
            progce.push('0');
            progce.push(String(Math.floor(fream_no/10)));
            progce.push(String(fream_no%10));
            
            this.MM[this.ptr + this.opAdd / 10] = progce;

            for(let k = 0;k<4;k++){
              document.getElementById(`${this.ptr + this.opAdd / 10}${k}`).style.backgroundColor = "yellow";
              document.getElementById(`${this.ptr + this.opAdd / 10}${k}`).innerHTML = "";
              document.getElementById(`${this.ptr + this.opAdd / 10}${k}`).innerHTML = progce[k];
            }

            

            this.Ic--;

          } 
          else if (this.function === 'PD') {
            this.errmsg(6);
            this.Terminate();
            throw new Error("This is an error message");
          } 
          else {
            this.errmsg(4);
            this.Terminate();
            throw new Error("This is an error message");
          }
        } 
        
        else if (this.ti === 2 && this.pi === 1) {
          this.errmsg(3);
          this.errmsg(4);
          this.Terminate();
          throw new Error("This is an error message");
        } 
        
        else if (this.ti === 2 && this.pi === 2) {
          this.errmsg(3);
          this.errmsg(5);
          this.Terminate();
          throw new Error("This is an error message");
        } 
        
        else if (this.ti === 2 && this.pi === 3) {
          this.errmsg(3);
          this.Terminate();
          throw new Error("This is an error message");
        }
      }

      simulation() {
        if (this.pcb.ttc > this.pcb.ttl) {
          this.ti = 2;
        }
      }

      addressMap(vr){

       
        let pte;
        let rd;
        if (vr >= 0 && vr <= 99) {
          pte = this.ptr + Math.floor(vr / 10);
          if (this.MM[pte][0] === '*') {
            this.pi = 3;
            return -1;
          } else {
            const sfno = this.MM[pte].join("");
            
            const fno = parseInt(sfno);
           
            rd = fno * 10 + (vr % 10);
          
            return rd;
          }
        } 
        else {
          this.pi = 2;
          this.MOS(data);
      }
    }

    executeuserprogram(data) {

        while(true){


          this.si = 3;
          this.pi = 0;
          this.ti = 0;
    
          const ra = this.addressMap(this.Ic);
    
          if (ra === -1) {
            this.Terminate();
            break;
          }
         


          this.IR = this.MM[ra];
          


          this.Ic++;

          let firstElement = this.IR[0]; 
          let secondElement = this.IR[1];

          this.function =  firstElement + secondElement;


         
          let operandAdd;
    
          if (this.IR[0] !== 'H') {
            
            let tenthPlace = this.IR[2]; 
            let unitplace = this.IR[3];
            let flag = true;

            
            if(flag != true){
                this.pi = 2;
                this.MOS(data);
            }

            var oprand = tenthPlace + unitplace;
            if (!/[0-9]/.test(tenthPlace) || !/[0-9]/.test(unitplace)) {
              this.pi = 2;
              this.MOS(data);
              break;
            } 
            
          
            this.opAdd = parseInt(oprand);
            operandAdd = this.addressMap(this.opAdd);
          }
    
          if (operandAdd === -1 && this.IR[0] !== 'H') {
                this.pi = 3;
                this.MOS(data);
                continue;
          }
    
          if (this.function === 'LR') {
            let r_count = 0;
            for (let i = operandAdd; i <= operandAdd + 9; i++) {
              for (let j = 0; j < 4; j++) {
                this.R[r_count++] = this.MM[i][j];
              }
            }
            this.si = 0;
          } 
          
          else if (this.function === 'SR') {
            let r_count = 0;
            for (let i = operandAdd; i < operandAdd + 9; i++) {
              for (let j = 0; j < 4; j++) {
                this.MM[i][j] = this.R[r_count++];
              }
            }
            this.si = 0;
          }
          
          else if (this.function === 'CR') {
            let r_count = 0;
            let flag = 0;
            for (let i = operandAdd; i < operandAdd + 9; i++) {
              for (let j = 0; j < 4; j++) {
                if (this.MM[i][j] !== this.R[r_count++]) {
                  flag = 1;
                  break;
                }
              }
            }
            if (flag === 0) {
              this.C = true;
            } else {
              this.C = false;
            }
            this.si = 0;
          } 
          
          else if (this.function === 'BT') {
            if (this.C === true) {
              this.Ic = operandAdd + parseInt(this.IR[3]);
            } else {
              continue;
            }
            this.si = 0;
          } 
        
          else if (this.function === 'GD') {
            this.si = 1;
            this.rd = operandAdd;
            this.pcb.ttc = this.pcb.ttc + 2;
          } 
            
          else if (this.function === 'PD') {
            this.si = 2;
            this.pcb.ttc++;
            this.rd = operandAdd;
          } 
          
          else if (this.IR[0] === 'H') {
            this.si = 3;
            this.pcb.ttc++;
            this.simulation();
            this.MOS(data);
            break;
          }
          
          else {
            this.si = 0;
            this.pi = 1;
          }
    
          this.simulation();
          this.MOS(data);
        }
      }






      startexecution(data) {
        this.Ic = 0;
        this.executeuserprogram(data);
      }


      Allocatefream() {
        let ptsi;
        while (true) {
          const fream_no = Math.floor(Math.random() * 30);
          if (this.isFree(fream_no)) {
            ptsi = fream_no * 10;
            var star = ['*','*','*','*']
            for(let i =ptsi;i<=ptsi+9;i++){
                document.getElementById(`${i}0`).style.backgroundColor = "green";
                document.getElementById(`${i}1`).style.backgroundColor = "green";
                document.getElementById(`${i}2`).style.backgroundColor = "green";
                document.getElementById(`${i}3`).style.backgroundColor = "green";
                this.MM[i] = star;
            }
            break;
          } else {
            continue;
          }
        }
        this.ptr = ptsi;
 
      }

      Load(){
        
        let i = 0;
    
        while (i < buffer.length) {
    
            var line = buffer[i++];
    
            var cardID = line.substr(0, 4);
    
            //console.log(line,cardID);
    
            if (cardID === '$AMJ') {

                this.Allocatefream();

                const pid = line.substr(4, 4);
                const timelimit = line.substr(8, 4);
                const linelimit = line.substr(12, 4);
                this.pcb.pid = parseInt(pid);
                this.pcb.ttl = parseInt(timelimit);
                this.pcb.tll = parseInt(linelimit);
                this.pcb.llc = 0;
                this.pcb.ttc = 0;
    
              continue;
            } 


            else if (cardID === '$DTA') {
                
                var databuffer = [];

                if(buffer[i].substr(0,4) === '$END'){
                    this.errmsg(1);
                    this.Terminate();
                    break;
                }

                databuffer.push(buffer[i++]);
            
                this.startexecution(databuffer);
            } 


            else if (cardID === '$END') {
                break;
            }

           else {

                let fream_no = Math.floor(Math.random() * 30);
                let progei = fream_no;
                var progce = [];
                progce.push('0');
                progce.push('0');
                progce.push(String(Math.floor(progei/10)));
                progce.push(String(progei%10));
                

                this.MM[this.ptr] = progce
                for(let x = 0;x<4;x++){
                  document.getElementById(`${this.ptr}${x}`).innerHTML = "";
                  document.getElementById(`${this.ptr}${x}`).innerHTML = progce[x];
                }
                document.getElementById(`${this.ptr}0`).style.backgroundColor = "yellow";
                document.getElementById(`${this.ptr}1`).style.backgroundColor = "yellow";
                document.getElementById(`${this.ptr}2`).style.backgroundColor = "yellow";
                document.getElementById(`${this.ptr}3`).style.backgroundColor = "yellow";

                var inst = line;
               

                var row = progei*10;

                var singleInstruction = [];
                
                for(let k = row;k<=row+9;k++){
                  for(let l = 0;l<4;l++){
                    document.getElementById(`${k}${l}`).style.backgroundColor = "gray";
                  }
                }


                for(let j =0;j<inst.length;j++){

                    if(inst.charAt(j) === 'H'){
                        this.MM[row] = ['H','-','-','-'];
                        document.getElementById(`${row}0`).style.backgroundColor = "yellow";
                        document.getElementById(`${row}0`).innerHTML = "";
                        document.getElementById(`${row}0`).innerHTML = 'H';
                        document.getElementById(`${row}1`).style.backgroundColor = "yellow";
                        document.getElementById(`${row}1`).innerHTML = "";
                        document.getElementById(`${row}1`).innerHTML = '-';
                        document.getElementById(`${row}2`).style.backgroundColor = "yellow";
                        document.getElementById(`${row}2`).innerHTML = "";
                        document.getElementById(`${row}2`).innerHTML = '-';
                        document.getElementById(`${row}3`).style.backgroundColor = "yellow";
                        document.getElementById(`${row}3`).innerHTML = "";
                        document.getElementById(`${row}3`).innerHTML = '-';

                        row++;
                        singleInstruction = [];
                    }

                    singleInstruction.push(inst.charAt(j));

                    if(singleInstruction.length == 4){
                        this.MM[row] = singleInstruction;
                        for(let k = 0;k<4;k++){
                          document.getElementById(`${row}${k}`).style.backgroundColor = "yellow";
                          document.getElementById(`${row}${k}`).innerHTML = "";
                          document.getElementById(`${row}${k}`).innerHTML = singleInstruction[k];
                        }
                        row++;
                        singleInstruction = [];
                    }
                }
            }
        }
    }
   
}

execute.addEventListener("click",processParagraph);

function processParagraph() 
{
    // Get the input paragraph from the textarea
    var inputParagraph = document.getElementById("paragraphInput").value;

    // Split the paragraph into lines
    var lines = inputParagraph.split('\n');

    // Access and process each line

    var output = "";
    for (var i = 0; i < lines.length; i++) {
        // Trim the whitespace from the beginning and end of the line
        var trimmedLine = lines[i].trim();

        // Check if the line is not empty
        if (trimmedLine !== "") {
            // Process the line (for example, you can display it, manipulate it, etc.)
            output += "Line " + (i + 1) + ": " + trimmedLine + "<br>";
            buffer.push(trimmedLine);
        }
    }

    const vos = new opsys();
    vos.Load();
}