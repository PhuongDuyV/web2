let toggleNode2 = document.querySelector(".toggleNode2");
let toggle2Node2 = document.querySelector(".toggle2Node2");
let textNode2 = document.querySelector(".textNode2");
let text1Node2 = document.querySelector(".text1Node2");
function AnimatedtoggleNode2(buttonNumber2){
  if (buttonNumber2 === 1) {
  toggleNode2.classList.toggle("active");
  if(toggle.classList.contains("active")){
    textNode2.innerHTML = "ON";
  }
  else{
    textNode2.innerHTML = "OFF";
  } 
  } else if (buttonNumber2 === 2) {
    toggle2Node2.classList.toggle("active");
    if (toggle2Node2.classList.contains("active")) {
      text1Node2.innerHTML = "ON";
    } else {
      text1Node2.innerHTML = "OFF";
    }
}}

var chungcu1 = false;
var CheckMK = false;
var checkjson = false;
var ND2 = "0";
var DA2 = "0";
var SSD2 = "0";

var S1 = "0";
var S2 = "0";

var T1 = "0";
var T2 = "0";

var LineND2 = false;
var LineDA2 = false;
var LineSSD2 = false;



					
					//=======================================
					          LineND2_19 = "0";
                    LineND2_18 = "0";
                    LineND2_17 = "0";
                    LineND2_16 = "0";
                    LineND2_15 = "0";
                    LineND2_14 = "0";
                    LineND2_13 = "0";
                    LineND2_12 = "0";
                    LineND2_11 = "0";
                    LineND2_10 = "0";
                    LineND2_9 = "0";
                    LineND2_8 = "0";
                    LineND2_7 = "0";
                    LineND2_6 = "0";
                    LineND2_5 = "0";
                    LineND2_4 = "0";
                    LineND2_3 = "0";
                    LineND2_2 = "0";
                    LineND2_1 = "0";
				          	LineND2_0 = "0";

                    LineDA2_19 = "0";
                    LineDA2_18 = "0";
                    LineDA2_17 = "0";
                    LineDA2_16 = "0";
                    LineDA2_15 = "0";
                    LineDA2_14 = "0";
                    LineDA2_13 = "0";
                    LineDA2_12 = "0";
                    LineDA2_11 = "0";
                    LineDA2_10 = "0";
                    LineDA2_9 = "0";
                    LineDA2_8 = "0";
                    LineDA2_7 = "0";
                    LineDA2_6 = "0";
                    LineDA2_5 = "0";
                    LineDA2_4 = "0";
                    LineDA2_3 = "0";
                    LineDA2_2 = "0";
                    LineDA2_1 = "0";
					LineDA2_0 = "0";
					
					
					LineSSD2_19 = "0";
                    LineSSD2_18 = "0";
                    LineSSD2_17 = "0";
                    LineSSD2_16 = "0";
                    LineSSD2_15 = "0";
                    LineSSD2_14 = "0";
                    LineSSD2_13 = "0";
                    LineSSD2_12 = "0";
                    LineSSD2_11 = "0";
                    LineSSD2_10 = "0";
                    LineSSD2_9 = "0";
                    LineSSD2_8 = "0";
                    LineSSD2_7 = "0";
                    LineSSD2_6 = "0";
                    LineSSD2_5 = "0";
                    LineSSD2_4 = "0";
                    LineSSD2_3 = "0";
                    LineSSD2_2 = "0";
                    LineSSD2_1 = "0";
					LineSSD2_0 = "0";
					
					
					
					
					
					

 
function LoadForm()
		{
			document.getElementById("quanlytuoicay1").style.display = "block";	
			document.getElementById("quanlytuoicay2").style.display = "block";	
			document.getElementById("quanlytuoicay3").style.display = "block";	
        }
 google.charts.load('current', {'packages':['gauge']});
     google.charts.setOnLoadCallback(drawChart);
   function drawChart() 
      {

		
		 var datanhietdo_2 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temp', 80],
        ]);

      var datadoam_2 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Humi', 80],
 
        ]);
		
		
		  var dataga_2 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['SoilMois', 80],
 
        ]);
		
		
		
    

		
		var optionsnhietdo_2 = {
          min: 0, max: 150,
          width: 400, height: 200,
          redFrom: 130, redTo: 150,
          yellowFrom:100, yellowTo: 140,
          minorTicks: 5
        };

    var optionsdoam_2 = {
          min: 0, max: 100,
          width: 400, height: 200,
          redFrom: 80, redTo: 100,
          yellowFrom:70, yellowTo:80,
          minorTicks: 5
        };
		
		var optionsga_2 = {
           min: 0, max: 1000,
          width: 400, height: 200,
          redFrom: 500, redTo: 700,
          yellowFrom:700, yellowTo:1000,
          minorTicks: 5
        };
		
	
		
		
		
		
    
    
		
		
		var chartnhietdo_2 = new google.visualization.Gauge(document.getElementById('chart_nhietdo_2')); 
		var chart_doam2 = new google.visualization.Gauge(document.getElementById('chart_doam_2'));
		var chart_ga2 = new google.visualization.Gauge(document.getElementById('chart_ga_2'));
		chartnhietdo_2.draw(datanhietdo_2, optionsnhietdo_2);
    chart_doam2.draw(datadoam_2, optionsdoam_2);
		chart_ga2.draw(dataga_2, optionsga_2);
		
		
		
      setInterval(function() {	  
		  datanhietdo_2.setValue(0, 1, ND2);
      chartnhietdo_2.draw(datanhietdo_2, optionsnhietdo_2);
		  
		  datadoam_2.setValue(0, 1, DA2);
      chart_doam2.draw(datadoam_2, optionsdoam_2);
		  
		  dataga_2.setValue(0, 1, SSD2);
      chart_ga2.draw(dataga_2, optionsga_2);
		  
		  
		 
		  
        }, 300);
    
    }
	
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartLine);

      function drawChartLine() {

	
		
		 var datalinenhietdo_2 = google.visualization.arrayToDataTable([
			
          ['Year', 'TEMPERATURE'],
		      ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
		      ['',  0],
		      ['',  0],
		      ['',  0],
		      ['',  0],
		      ['',  0],
		      ['',  0],
		      ['',  0],
		      ['',  0],
		      ['',  0],
          ['',  0],
		      ['',  0],
		      ['',  0],
		      ['',  0],
		      ['',  0],
		      ['',  0],
        ]);
		
        var datalinedoam_2 = google.visualization.arrayToDataTable([
			
          ['Year', 'HUMIDITY'],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
          ['',  0],
       ]);


 var datalinega_2 = google.visualization.arrayToDataTable([
  
      ['Year', 'SOIL MOISTURE'],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ['',  0],
      ]);


		
		
		
		
		
		
		var optionslinenhietdo_2 = {
          title: 'TEMPERATURE',
		   legend: { position: 'bottom' },
       width: 600, height: 260,
		  vAxis: 
			{
				viewWindowMode:'explicit',
				viewWindow: 
				{
				  min:0,
				   max:100,
				},
				tooltip: 
				{
						trigger: 'none'
				},
				annotation: 
				{
					1: 	{
							style: 'none'
						}
				},
				
			},
			legend: 
		   {
				position: 'none',
				alignment:'start',
			},
                        
           responsive: true, 
		    curveType: 'function',
            legend: { "position": 'bottom' },
			
            selectionMode: 'multiple',
            tooltip: {"trigger": 'both'},
            aggregationTarget: 'none',
            focusTarget: "category",
            explorer: {
                axis: 'horizontal',
                actions: ['dragToZoom', 'rightClickToReset']
            },
            crosshair: { 
                trigger: "both",
                orientation: 'vertical' 
            },
			
			
			scales:
			{
				y:
				{
					beginAtZero: true,
				}
			},
			chartArea: {
				backgroundColor: {
					stroke: '#4322c0',
					strokeWidth: 1,
				
				}
			},
			stroke: {
			  curve: 'smooth',
			},
			fill: {
				type: "gradient",
				gradient: {
				  shadeIntensity: 1,
				  opacityFrom: 0.7,
				  opacityTo: 0.9,
				  stops: [0, 90, 100]
				}
			},	
			
		};
		
		var optionslinedoam_2 = {
          title: 'HUMIDITY',
		   legend: { position: 'bottom' },
       width: 600, height: 260,
		  vAxis: 
			{
				viewWindowMode:'explicit',
				viewWindow: 
				{
				  min:0,
				   max:100,
				},
				tooltip: 
				{
						trigger: 'none'
				},
				annotation: 
				{
					1: 	{
							style: 'none'
						}
				},
				
			},
			legend: 
		   {
				position: 'none',
				alignment:'start',
			},
                        
           responsive: true, 
		    curveType: 'function',
            legend: { "position": 'bottom' },
			
            selectionMode: 'multiple',
            tooltip: {"trigger": 'both'},
            aggregationTarget: 'none',
            focusTarget: "category",
            explorer: {
                axis: 'horizontal',
                actions: ['dragToZoom', 'rightClickToReset']
            },
            crosshair: { 
                trigger: "both",
                orientation: 'vertical' 
            },
			
			
			scales:
			{
				y:
				{
					beginAtZero: true,
				}
			},
			chartArea: {
				backgroundColor: {
					stroke: '#4322c0',
					strokeWidth: 3,
				
				}
			},
			stroke: {
			  curve: 'smooth',
			},
			fill: {
				type: "gradient",
				gradient: {
				  shadeIntensity: 1,
				  opacityFrom: 0.7,
				  opacityTo: 0.9,
				  stops: [0, 90, 100]
				}
			},	
			
		};

var optionslinega_2 = {
          title: 'SOIL MOISTURE',
		   legend: { position: 'bottom' },
			width: 600, height: 260,
		  vAxis: 
			{
				viewWindowMode:'explicit',
				viewWindow: 
				{
				  min:0,
				   max:1100,
				},
				tooltip: 
				{
						trigger: 'none'
				},
				annotation: 
				{
					1: 	{
							style: 'none'
						}
				},
				
			},
			legend: 
		   {
				position: 'none',
				alignment:'start',
			},
                        
           responsive: true, 
		    curveType: 'function',
            legend: { "position": 'bottom' },
			
            selectionMode: 'multiple',
            tooltip: {"trigger": 'both'},
            aggregationTarget: 'none',
            focusTarget: "category",
            explorer: {
                axis: 'horizontal',
                actions: ['dragToZoom', 'rightClickToReset']
            },
            crosshair: { 
                trigger: "both",
                orientation: 'vertical' 
            },
			
			
			scales:
			{
				y:
				{
					beginAtZero: true,
				}
			},
			chartArea: {
				backgroundColor: {
					stroke: '#4322c0',
					strokeWidth: 3,
				
				}
			},
			stroke: {
			  curve: 'smooth',
			},
			fill: {
				type: "gradient",
				gradient: {
				  shadeIntensity: 1,
				  opacityFrom: 0.7,
				  opacityTo: 0.9,
				  stops: [0, 90, 100]
				}
			},	
			
		};

		
		
		
		 
		 
		 var chartlinenhietdo_2 = new google.visualization.LineChart(document.getElementById('line_nhietdo_2'));
     var chartlinedoam_2 = new google.visualization.LineChart(document.getElementById('line_doam_2'));
		var chartlinega_2 = new google.visualization.LineChart(document.getElementById('line_ga_2'));
		
		
		chartlinenhietdo_2.draw(datalinenhietdo_2, optionslinenhietdo_2);
    chartlinedoam_2.draw(datalinedoam_2, optionslinedoam_2);
		 chartlinega_2.draw(datalinega_2, optionslinega_2);
		 
		 
		
	
		 
		
				
				
				
				//======================================================
				
		  setInterval(function() {
            if(LineND2)
            {
                console.log("LineND2_0:" + LineND2_0);
                  
                    datalinenhietdo_2.setValue(19, 1, LineND2_0);                   
                    datalinenhietdo_2.setValue(18, 1, LineND2_1);                  
                    datalinenhietdo_2.setValue(17, 1, LineND2_2);                   
                    datalinenhietdo_2.setValue(16, 1, LineND2_3);                  
                    datalinenhietdo_2.setValue(15, 1, LineND2_4);                  
                    datalinenhietdo_2.setValue(14, 1, LineND2_5);                   
                    datalinenhietdo_2.setValue(13, 1, LineND2_6);                   
                    datalinenhietdo_2.setValue(12, 1, LineND2_7);                   
                    datalinenhietdo_2.setValue(11, 1, LineND2_8);                  
                    datalinenhietdo_2.setValue(10, 1, LineND2_9);                  
                    datalinenhietdo_2.setValue(9, 1, LineND2_10);                 
                    datalinenhietdo_2.setValue(8, 1, LineND2_11);                  
                    datalinenhietdo_2.setValue(7, 1, LineND2_12);                  
                    datalinenhietdo_2.setValue(6, 1, LineND2_13);                 
                    datalinenhietdo_2.setValue(5, 1, LineND2_14);                
                    datalinenhietdo_2.setValue(4, 1, LineND2_15);                
                    datalinenhietdo_2.setValue(3, 1, LineND2_16);                 
                    datalinenhietdo_2.setValue(2, 1, LineND2_17);                   
                    datalinenhietdo_2.setValue(1, 1, LineND2_18);  
                    datalinenhietdo_2.setValue(0, 1, LineND2_19);
                    chartlinenhietdo_2.draw(datalinenhietdo_2, optionslinenhietdo_2);
                    
                    LineND2_19 = LineND2_18;
                    LineND2_18 = LineND2_17;
                    LineND2_17 = LineND2_16;
                    LineND2_16 = LineND2_15;
                    LineND2_15 = LineND2_14;
                    LineND2_14 = LineND2_13;
                    LineND2_13 = LineND2_12;
                    LineND2_12 = LineND2_11;
                    LineND2_11 = LineND2_10;
                    LineND2_10 = LineND2_9;
                    LineND2_9 = LineND2_8;
                    LineND2_8 = LineND2_7;
                    LineND2_7 = LineND2_6;
                    LineND2_6 = LineND2_5;
                    LineND2_5 = LineND2_4;
                    LineND2_4 = LineND2_3;
                    LineND2_3 = LineND2_2;
                    LineND2_2 = LineND2_1;
                    LineND2_1 = LineND2_0;          
				    LineND2 = false;
            } 
                }, 300); 

              
            setInterval(function() {
            if(LineDA2)
            {
                console.log("LineDA_0:" + LineDA_0);
                  
                    datalinedoam_2.setValue(19, 1, LineDA2_0);                   
                    datalinedoam_2.setValue(18, 1, LineDA2_1);                  
                    datalinedoam_2.setValue(17, 1, LineDA2_2);                   
                    datalinedoam_2.setValue(16, 1, LineDA2_3);                  
                    datalinedoam_2.setValue(15, 1, LineDA2_4);                  
                    datalinedoam_2.setValue(14, 1, LineDA2_5);                   
                    datalinedoam_2.setValue(13, 1, LineDA2_6);                   
                    datalinedoam_2.setValue(12, 1, LineDA2_7);                   
                    datalinedoam_2.setValue(11, 1, LineDA2_8);                  
                    datalinedoam_2.setValue(10, 1, LineDA2_9);                  
                    datalinedoam_2.setValue(9, 1, LineDA2_10);                 
                    datalinedoam_2.setValue(8, 1, LineDA2_11);                  
                    datalinedoam_2.setValue(7, 1, LineDA2_12);                  
                    datalinedoam_2.setValue(6, 1, LineDA2_13);                 
                    datalinedoam_2.setValue(5, 1, LineDA2_14);                
                    datalinedoam_2.setValue(4, 1, LineDA2_15);                
                    datalinedoam_2.setValue(3, 1, LineDA2_16);                 
                    datalinedoam_2.setValue(2, 1, LineDA2_17);                   
                    datalinedoam_2.setValue(1, 1, LineDA2_18);  
                    datalinedoam_2.setValue(0, 1, LineDA2_19);
                    chartlinedoam_2.draw(datalinedoam_2, optionslinedoam_2);
                    
                    LineDA2_19 = LineDA2_18;
                    LineDA2_18 = LineDA2_17;
                    LineDA2_17 = LineDA2_16;
                    LineDA2_16 = LineDA2_15;
                    LineDA2_15 = LineDA2_14;
                    LineDA2_14 = LineDA2_13;
                    LineDA2_13 = LineDA2_12;
                    LineDA2_12 = LineDA2_11;
                    LineDA2_11 = LineDA2_10;
                    LineDA2_10 = LineDA2_9;
                    LineDA2_9 = LineDA2_8;
                    LineDA2_8 = LineDA2_7;
                    LineDA2_7 = LineDA2_6;
                    LineDA2_6 = LineDA2_5;
                    LineDA2_5 = LineDA2_4;
                    LineDA2_4 = LineDA2_3;
                    LineDA2_3 = LineDA2_2;
                    LineDA2_2 = LineDA2_1;
                    LineDA2_1 = LineDA2_0;          
				    LineDA2 = false;
            }
			
			
                    
                }, 300); 
				
				
                setInterval(function() {
            if(LineSSD2)
            {
                console.log("LineSSD2_0:" + LineSSD2_0);
                  
                    datalinega_2.setValue(19, 1, LineSSD2_0);                   
                    datalinega_2.setValue(18, 1, LineSSD2_1);                  
                    datalinega_2.setValue(17, 1, LineSSD2_2);                   
                    datalinega_2.setValue(16, 1, LineSSD2_3);                  
                    datalinega_2.setValue(15, 1, LineSSD2_4);                  
                    datalinega_2.setValue(14, 1, LineSSD2_5);                   
                    datalinega_2.setValue(13, 1, LineSSD2_6);                   
                    datalinega_2.setValue(12, 1, LineSSD2_7);                   
                    datalinega_2.setValue(11, 1, LineSSD2_8);                  
                    datalinega_2.setValue(10, 1, LineSSD2_9);                  
                    datalinega_2.setValue(9, 1, LineSSD2_10);                 
                    datalinega_2.setValue(8, 1, LineSSD2_11);                  
                    datalinega_2.setValue(7, 1, LineSSD2_12);                  
                    datalinega_2.setValue(6, 1, LineSSD2_13);                 
                    datalinega_2.setValue(5, 1, LineSSD2_14);                
                    datalinega_2.setValue(4, 1, LineSSD2_15);                
                    datalinega_2.setValue(3, 1, LineSSD2_16);                 
                    datalinega_2.setValue(2, 1, LineSSD2_17);                   
                    datalinega_2.setValue(1, 1, LineSSD2_18);  
                    datalinega_2.setValue(0, 1, LineSSD2_19);
                   chartlinega_2.draw(datalinega_2, optionslinega_2);
                    
                    LineSSD2_19 = LineSSD2_18;
                    LineSSD2_18 = LineSSD2_17;
                    LineSSD2_17 = LineSSD2_16;
                    LineSSD2_16 = LineSSD2_15;
                    LineSSD2_15 = LineSSD2_14;
                    LineSSD2_14 = LineSSD2_13;
                    LineSSD2_13 = LineSSD2_12;
                    LineSSD2_12 = LineSSD2_11;
                    LineSSD2_11 = LineSSD2_10;
                    LineSSD2_10 = LineSSD2_9;
                    LineSSD2_9 = LineSSD2_8;
                    LineSSD2_8 = LineSSD2_7;
                    LineSSD2_7 = LineSSD2_6;
                    LineSSD2_6 = LineSSD2_5;
                    LineSSD2_5 = LineSSD2_4;
                    LineSSD2_4 = LineSSD2_3;
                    LineSSD2_3 = LineSSD2_2;
                    LineSSD2_2 = LineSSD2_1;
                    LineSSD2_1 = LineSSD2_0;          
				    LineSSD2 = false;
            }
			
			
                    
                }, 300); 
              }
				
				//=======================================================
			
		
var hostname = "ngoinhaiot.com";
var port = 2222;
var clientId = "Web";
clientId += new Date().getUTCMilliseconds();

var user_mqtt = "nhatquang3102";
var pass_mqtt = "4CFDA840F1F84281";

var topicpub = "nhatquang3102/B";

var topicsub = "nhatquang3102/A"; // topic nhận dữ liệu của ESP

mqttClient = new Paho.MQTT.Client(hostname, port, clientId);
mqttClient.onMessageArrived = MessageArrived;
mqttClient.onConnectionLost = ConnectionLost;
Connect();

function Connect(){
	mqttClient.connect({
	useSSL: false,
	userName: user_mqtt,
	password: pass_mqtt,
	onSuccess: Connected,
	onFailure: ConnectionFailed,
	keepAliveInterval: 10,
	});
}
function Connected() {
	console.log("Connected to broker");
	mqttClient.subscribe(topicsub);
}

function ConnectionFailed(res) {
	console.log("Connect failed:" + res.errorMessage);
}

function ConnectionLost(res) {
	if (res.errorCode !== 0) {
		console.log("Connection lost:" + res.errorMessage);
		Connect();
	}
}

function MessageArrived(message) 
{
	console.log("Data ESP:" + message.payloadString);
	
	
	IsJsonString(message.payloadString);
	
	if(checkjson)
	{
	   console.log("JSON OK!!!");
	   var  DataVDK = message.payloadString;            
       console.log("Dữ liệu VDK:" + DataVDK);
		
		var DataJson = JSON.parse(DataVDK); 
 
			 
		ND2 =  DataJson.ND2;
		DA2 = DataJson.DA2;
		SSD2 = DataJson.SSD2;

		
		LineND2_0 = DataJson.ND2;
		
		LineDA2_0 = DataJson.DA2;
		
		LineSSD2_0 = DataJson.SSD2;
		
		
	
		document.getElementById("T1").innerHTML = DataJson.T1;
		document.getElementById("T2").innerHTML = DataJson.T2;
		
		document.getElementById("ND2").innerHTML = ND2;
		document.getElementById("DA2").innerHTML = DA2;
		document.getElementById("SSD2").innerHTML = SSD2;
		
        if(DataJson.RL2_P == 1)
        {
          AnimatedtoggleNode2(2)
        }
        else if(DataJson.RL2_P == 0)
        {
          AnimatedtoggleNode2(2)
        } 

        if(DataJson.RL2_F == 1)
        {
          AnimatedtoggleNode2(2)
        }
        else if(DataJson.RL2_F == 0)
        {
          AnimatedtoggleNode2(2)
        } 
			  


			 if(DataJson.S1 == 1)
			  {
		
				document.getElementById("S1").innerHTML = "TURNNING ON";
			  }
			  else if(DataJson.S1 == 0)
			  {
	
				document.getElementById("S1").innerHTML = "TURNNING OFF";

			  } 
			  
			  if(DataJson.S2 == 1)
			  {
		
				document.getElementById("S2").innerHTML = "TURNNING ON";
			  }
			  else if(DataJson.S1 == 0)
			  {
	
				document.getElementById("S2").innerHTML = "TURNNING OFF";

			  } 

			
			  
			  
				LineND2 = true;
				LineDA2 = true;
				LineSSD2 = true;
		
	
	}
	else 
	{
		console.log("JSON Error!!!");
	}
	

}

function IsJsonString(str)
			{
				try
				{
					JSON.parse(str);
				} 
				catch (e)
				{
					checkjson = false;
					return false;
				}
				checkjson = true;
				return true;
			} 
function Getbaodong(data)
{
 switch(data)
 {
	case 1:
		{
			console.log("Báo động 1");
			mqttClient.send(topicpub,"{\"ID\":\"1\",\"BD\":\"1\"}");
		}
		
		
		break;
	case 2:
		{
			console.log("Báo động 2");
			mqttClient.send(topicpub,"{\"ID\":\"2\",\"BD\":\"1\"}");
		}
		break;
	case 3:
		
		{
			console.log("Báo động all 1");
			mqttClient.send(topicpub,"{\"ID\":\"1\",\"BD\":\"1\"}");
		}
		break;
	case 4:
		{
			console.log("Báo động all 2");
			mqttClient.send(topicpub,"{\"ID\":\"2\",\"BD\":\"1\"}");
		}
		break;
 }
  
}
function GETBUTTON(data)
{
  switch(data)
  {
	case 1:
	{
		var TT_RL2_P = document.getElementById("RL2_P").value;
		console.log("ĐIỀU KHIỂN RELAY -  TT_RL2_P:" + TT_RL2_P);
		if(TT_RL2_P == "ON")
		{
			mqttClient.send(topicpub,"{\"RL2_P\":\"0\"}");
		}
		else if(TT_RL2_P == "OFF")
		{
			mqttClient.send(topicpub,"{\"RL2_P\":\"1\"}");
		}
	}
		
	break;
	case 2:
	{
		console.log("HẸN GIỜ");
		var selectchongio = document.getElementById("chongio");
		var chongio = selectchongio.options[selectchongio.selectedIndex].value;
		console.log("chongio:" + chongio);
		
		var selectchonphut = document.getElementById("chonphut");
		var chonphut = selectchonphut.options[selectchonphut.selectedIndex].value;
		console.log("chonphut:" + chonphut);
		
		
		var selectchonmode = document.getElementById("mode");
		var chonmode = selectchonmode.options[selectchonmode.selectedIndex].value;
		console.log("chonmode:" + chonmode);
		
		
		
		if(chonmode == "1")
		{
			
			var RX = "{\"S1\":\"1\",\"G1\":\""+chongio+"\",\"P1\":\""+chonphut+"\"}";
			console.log("hẹn giờ bật ON:"+RX);
			mqttClient.send(topicpub,RX);
		}
		else if(chonmode == "2")
		{
			console.log("tắt hẹn giờ bật");
			mqttClient.send(topicpub,"{\"S1\":\"0\"}");
		}
		else if(chonmode == "3")
		{
			console.log("hẹn giờ tắt ON");
			var RX = "{\"S2\":\"1\",\"G2\":\""+chongio+"\",\"P2\":\""+chonphut+"\"}";
			console.log("hẹn giờ bật ON:"+RX);
			mqttClient.send(topicpub,RX);
		}
		else if(chonmode == "4")
		{
			console.log("tắt hẹn giờ tắt");
			mqttClient.send(topicpub,"{\"S2\":\"0\"}");
		}
		
	}
	break;	
case 3:
	{
		var TT_RL2_F = document.getElementById("RL2_F").value;
		console.log("ĐIỀU KHIỂN fan -  TT_RL2_F:" + TT_RL2_F);
		if(TT_RL2_F == "ON")
		{
			mqttClient.send(topicpub,"{\"RL2_F\":\"0\"}");
		}
		else if(TT_RL2_F == "OFF")
		{
			mqttClient.send(topicpub,"{\"RL2_F\":\"1\"}");
		}
	}
}
  
}



