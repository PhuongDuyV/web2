let toggleNode1 = document.querySelector(".toggleNode1");
let toggle2Node1 = document.querySelector(".toggle2Node1");
let textNode1 = document.querySelector(".textNode1");
let text1Node1 = document.querySelector(".text1Node1");
function AnimatedtoggleNode1(buttonNumber){
  if (buttonNumber === 1) {
  toggleNode1.classList.toggle("active");
  if(toggleNode1.classList.contains("active")){
    textNode1.innerHTML = "ON";
  }
  else{
    textNode1.innerHTML = "OFF";
  } 
  } else if (buttonNumber === 2) {
    toggle2Node1.classList.toggle("active");
    if (toggle2Node1.classList.contains("active")) {
      text1Node1.innerHTML = "ON";
    } else {
      text1Node1.innerHTML = "OFF";
    }
}
}

var chungcu1 = false;
var CheckMK = false;
var checkjson = false;
var ND1 = "0";
var DA1 = "0";
var SSD1 = "0";

var S1 = "0";
var S2 = "0";

var T1 = "0";
var T2 = "0";

var LineND1 = false;
var LineDA1 = false;
var LineSSD1 = false;



					
					//=======================================
					LineND1_19 = "0";
                    LineND1_18 = "0";
                    LineND1_17 = "0";
                    LineND1_16 = "0";
                    LineND1_15 = "0";
                    LineND1_14 = "0";
                    LineND1_13 = "0";
                    LineND1_12 = "0";
                    LineND1_11 = "0";
                    LineND1_10 = "0";
                    LineND1_9 = "0";
                    LineND1_8 = "0";
                    LineND1_7 = "0";
                    LineND1_6 = "0";
                    LineND1_5 = "0";
                    LineND1_4 = "0";
                    LineND1_3 = "0";
                    LineND1_2 = "0";
                    LineND1_1 = "0";
					LineND1_0 = "0";

                    LineDA1_19 = "0";
                    LineDA1_18 = "0";
                    LineDA1_17 = "0";
                    LineDA1_16 = "0";
                    LineDA1_15 = "0";
                    LineDA1_14 = "0";
                    LineDA1_13 = "0";
                    LineDA1_12 = "0";
                    LineDA1_11 = "0";
                    LineDA1_10 = "0";
                    LineDA1_9 = "0";
                    LineDA1_8 = "0";
                    LineDA1_7 = "0";
                    LineDA1_6 = "0";
                    LineDA1_5 = "0";
                    LineDA1_4 = "0";
                    LineDA1_3 = "0";
                    LineDA1_2 = "0";
                    LineDA1_1 = "0";
					LineDA1_0 = "0";
					
					
					LineSSD1_19 = "0";
                    LineSSD1_18 = "0";
                    LineSSD1_17 = "0";
                    LineSSD1_16 = "0";
                    LineSSD1_15 = "0";
                    LineSSD1_14 = "0";
                    LineSSD1_13 = "0";
                    LineSSD1_12 = "0";
                    LineSSD1_11 = "0";
                    LineSSD1_10 = "0";
                    LineSSD1_9 = "0";
                    LineSSD1_8 = "0";
                    LineSSD1_7 = "0";
                    LineSSD1_6 = "0";
                    LineSSD1_5 = "0";
                    LineSSD1_4 = "0";
                    LineSSD1_3 = "0";
                    LineSSD1_2 = "0";
                    LineSSD1_1 = "0";
					LineSSD1_0 = "0";
					
					
					
					
					
					

 
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

		
		 var datanhietdo_1 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temp', 80],
        ]);

      var datadoam_1 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Humi', 80],
 
        ]);
		
		
		  var dataga_1 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['SoilMois', 80],
 
        ]);
		
		
		
    

		
		var optionsnhietdo_1 = {
          min: 0, max: 150,
          width: 400, height: 200,
          redFrom: 130, redTo: 150,
          yellowFrom:100, yellowTo: 140,
          minorTicks: 5
        };

    var optionsdoam_1 = {
          min: 0, max: 100,
          width: 400, height: 200,
          redFrom: 80, redTo: 100,
          yellowFrom:70, yellowTo:80,
          minorTicks: 5
        };
		
		var optionsga_1 = {
           min: 0, max: 1000,
          width: 400, height: 200,
          redFrom: 500, redTo: 700,
          yellowFrom:700, yellowTo:1000,
          minorTicks: 5
        };
		
	
		
		
		
		
    
    
		
		
		var chartnhietdo_1 = new google.visualization.Gauge(document.getElementById('chart_nhietdo_1')); 
		var chart_doam1 = new google.visualization.Gauge(document.getElementById('chart_doam_1'));
		var chart_ga1 = new google.visualization.Gauge(document.getElementById('chart_ga_1'));
		chartnhietdo_1.draw(datanhietdo_1, optionsnhietdo_1);
    chart_doam1.draw(datadoam_1, optionsdoam_1);
		chart_ga1.draw(dataga_1, optionsga_1);
		
		
		
      setInterval(function() {	  
		  datanhietdo_1.setValue(0, 1, ND1);
      chartnhietdo_1.draw(datanhietdo_1, optionsnhietdo_1);
		  
		  datadoam_1.setValue(0, 1, DA1);
      chart_doam1.draw(datadoam_1, optionsdoam_1);
		  
		  dataga_1.setValue(0, 1, SSD1);
      chart_ga1.draw(dataga_1, optionsga_1);
		  
		  
		 
		  
        }, 300);
    
    }
	
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartLine);

      function drawChartLine() {

	
		
		 var datalinenhietdo_1 = google.visualization.arrayToDataTable([
			
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
		
        var datalinedoam_1 = google.visualization.arrayToDataTable([
			
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


 var datalinega_1 = google.visualization.arrayToDataTable([
  
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


		
		
		var optionslinenhietdo_1 = {
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
		
		var optionslinedoam_1 = {
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

var optionslinega_1 = {
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

		
		
		
		 
		 
		 var chartlinenhietdo_1 = new google.visualization.LineChart(document.getElementById('line_nhietdo_1'));
     var chartlinedoam_1 = new google.visualization.LineChart(document.getElementById('line_doam_1'));
		var chartlinega_1 = new google.visualization.LineChart(document.getElementById('line_ga_1'));
		
		
		chartlinenhietdo_1.draw(datalinenhietdo_1, optionslinenhietdo_1);
    chartlinedoam_1.draw(datalinedoam_1, optionslinedoam_1);
		 chartlinega_1.draw(datalinega_1, optionslinega_1);
		 
		 
		
	
		 
		
				
				
				
				//======================================================
				
		  setInterval(function() {
            if(LineND1)
            {
                console.log("LineND1_0:" + LineND1_0);
                  
                    datalinenhietdo_1.setValue(19, 1, LineND1_0);                   
                    datalinenhietdo_1.setValue(18, 1, LineND1_1);                  
                    datalinenhietdo_1.setValue(17, 1, LineND1_2);                   
                    datalinenhietdo_1.setValue(16, 1, LineND1_3);                  
                    datalinenhietdo_1.setValue(15, 1, LineND1_4);                  
                    datalinenhietdo_1.setValue(14, 1, LineND1_5);                   
                    datalinenhietdo_1.setValue(13, 1, LineND1_6);                   
                    datalinenhietdo_1.setValue(12, 1, LineND1_7);                   
                    datalinenhietdo_1.setValue(11, 1, LineND1_8);                  
                    datalinenhietdo_1.setValue(10, 1, LineND1_9);                  
                    datalinenhietdo_1.setValue(9, 1, LineND1_10);                 
                    datalinenhietdo_1.setValue(8, 1, LineND1_11);                  
                    datalinenhietdo_1.setValue(7, 1, LineND1_12);                  
                    datalinenhietdo_1.setValue(6, 1, LineND1_13);                 
                    datalinenhietdo_1.setValue(5, 1, LineND1_14);                
                    datalinenhietdo_1.setValue(4, 1, LineND1_15);                
                    datalinenhietdo_1.setValue(3, 1, LineND1_16);                 
                    datalinenhietdo_1.setValue(2, 1, LineND1_17);                   
                    datalinenhietdo_1.setValue(1, 1, LineND1_18);  
                    datalinenhietdo_1.setValue(0, 1, LineND1_19);
                    chartlinenhietdo_1.draw(datalinenhietdo_1, optionslinenhietdo_1);
                    
                    LineND1_19 = LineND1_18;
                    LineND1_18 = LineND1_17;
                    LineND1_17 = LineND1_16;
                    LineND1_16 = LineND1_15;
                    LineND1_15 = LineND1_14;
                    LineND1_14 = LineND1_13;
                    LineND1_13 = LineND1_12;
                    LineND1_12 = LineND1_11;
                    LineND1_11 = LineND1_10;
                    LineND1_10 = LineND1_9;
                    LineND1_9 = LineND1_8;
                    LineND1_8 = LineND1_7;
                    LineND1_7 = LineND1_6;
                    LineND1_6 = LineND1_5;
                    LineND1_5 = LineND1_4;
                    LineND1_4 = LineND1_3;
                    LineND1_3 = LineND1_2;
                    LineND1_2 = LineND1_1;
                    LineND1_1 = LineND1_0;          
				    LineND1 = false;
            } 
                }, 300); 

              
            setInterval(function() {
            if(LineDA1)
            {
                console.log("LineDA1_0:" + LineDA1_0);
                  
                    datalinedoam_1.setValue(19, 1, LineDA1_0);                   
                    datalinedoam_1.setValue(18, 1, LineDA1_1);                  
                    datalinedoam_1.setValue(17, 1, LineDA1_2);                   
                    datalinedoam_1.setValue(16, 1, LineDA1_3);                  
                    datalinedoam_1.setValue(15, 1, LineDA1_4);                  
                    datalinedoam_1.setValue(14, 1, LineDA1_5);                   
                    datalinedoam_1.setValue(13, 1, LineDA1_6);                   
                    datalinedoam_1.setValue(12, 1, LineDA1_7);                   
                    datalinedoam_1.setValue(11, 1, LineDA1_8);                  
                    datalinedoam_1.setValue(10, 1, LineDA1_9);                  
                    datalinedoam_1.setValue(9, 1, LineDA1_10);                 
                    datalinedoam_1.setValue(8, 1, LineDA1_11);                  
                    datalinedoam_1.setValue(7, 1, LineDA1_12);                  
                    datalinedoam_1.setValue(6, 1, LineDA1_13);                 
                    datalinedoam_1.setValue(5, 1, LineDA1_14);                
                    datalinedoam_1.setValue(4, 1, LineDA1_15);                
                    datalinedoam_1.setValue(3, 1, LineDA1_16);                 
                    datalinedoam_1.setValue(2, 1, LineDA1_17);                   
                    datalinedoam_1.setValue(1, 1, LineDA1_18);  
                    datalinedoam_1.setValue(0, 1, LineDA1_19);
                    chartlinedoam_1.draw(datalinedoam_1, optionslinedoam_1);
                    
                    LineDA1_19 = LineDA1_18;
                    LineDA1_18 = LineDA1_17;
                    LineDA1_17 = LineDA1_16;
                    LineDA1_16 = LineDA1_15;
                    LineDA1_15 = LineDA1_14;
                    LineDA1_14 = LineDA1_13;
                    LineDA1_13 = LineDA1_12;
                    LineDA1_12 = LineDA1_11;
                    LineDA1_11 = LineDA1_10;
                    LineDA1_10 = LineDA1_9;
                    LineDA1_9 = LineDA1_8;
                    LineDA1_8 = LineDA1_7;
                    LineDA1_7 = LineDA1_6;
                    LineDA1_6 = LineDA1_5;
                    LineDA1_5 = LineDA1_4;
                    LineDA1_4 = LineDA1_3;
                    LineDA1_3 = LineDA1_2;
                    LineDA1_2 = LineDA1_1;
                    LineDA1_1 = LineDA1_0;          
				    LineDA1 = false;
            }
			
			
                    
                }, 300); 
				
				
                setInterval(function() {
            if(LineSSD1)
            {
                console.log("LineSSD1_0:" + LineSSD1_0);
                  
                    datalinega_1.setValue(19, 1, LineSSD1_0);                   
                    datalinega_1.setValue(18, 1, LineSSD1_1);                  
                    datalinega_1.setValue(17, 1, LineSSD1_2);                   
                    datalinega_1.setValue(16, 1, LineSSD1_3);                  
                    datalinega_1.setValue(15, 1, LineSSD1_4);                  
                    datalinega_1.setValue(14, 1, LineSSD1_5);                   
                    datalinega_1.setValue(13, 1, LineSSD1_6);                   
                    datalinega_1.setValue(12, 1, LineSSD1_7);                   
                    datalinega_1.setValue(11, 1, LineSSD1_8);                  
                    datalinega_1.setValue(10, 1, LineSSD1_9);                  
                    datalinega_1.setValue(9, 1, LineSSD1_10);                 
                    datalinega_1.setValue(8, 1, LineSSD1_11);                  
                    datalinega_1.setValue(7, 1, LineSSD1_12);                  
                    datalinega_1.setValue(6, 1, LineSSD1_13);                 
                    datalinega_1.setValue(5, 1, LineSSD1_14);                
                    datalinega_1.setValue(4, 1, LineSSD1_15);                
                    datalinega_1.setValue(3, 1, LineSSD1_16);                 
                    datalinega_1.setValue(2, 1, LineSSD1_17);                   
                    datalinega_1.setValue(1, 1, LineSSD1_18);  
                    datalinega_1.setValue(0, 1, LineSSD1_19);
                   chartlinega_1.draw(datalinega_1, optionslinega_1);
                    
                    LineSSD1_19 = LineSSD1_18;
                    LineSSD1_18 = LineSSD1_17;
                    LineSSD1_17 = LineSSD1_16;
                    LineSSD1_16 = LineSSD1_15;
                    LineSSD1_15 = LineSSD1_14;
                    LineSSD1_14 = LineSSD1_13;
                    LineSSD1_13 = LineSSD1_12;
                    LineSSD1_12 = LineSSD1_11;
                    LineSSD1_11 = LineSSD1_10;
                    LineSSD1_10 = LineSSD1_9;
                    LineSSD1_9 = LineSSD1_8;
                    LineSSD1_8 = LineSSD1_7;
                    LineSSD1_7 = LineSSD1_6;
                    LineSSD1_6 = LineSSD1_5;
                    LineSSD1_5 = LineSSD1_4;
                    LineSSD1_4 = LineSSD1_3;
                    LineSSD1_3 = LineSSD1_2;
                    LineSSD1_2 = LineSSD1_1;
                    LineSSD1_1 = LineSSD1_0;          
				    LineSSD1 = false;
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
 
			 
		ND1 =  DataJson.ND1;
		DA1 = DataJson.DA1;
		SSD1 = DataJson.SSD1;

		
		LineND1_0 = DataJson.ND1;
		
		LineDA1_0 = DataJson.DA1;

		LineSSD1_0 = DataJson.SSD1;
		
		
	
		document.getElementById("T1").innerHTML = DataJson.T1;
		document.getElementById("T2").innerHTML = DataJson.T2;
		
		document.getElementById("ND1").innerHTML = ND1;
		document.getElementById("DA1").innerHTML = DA1;
		document.getElementById("SSD1").innerHTML = SSD1;
		
			if(DataJson.RL1_P == 1)
			  {
				AnimatedtoggleNode1(1)
			  }
			  else if(DataJson.RL1_P == 0)
			  {
				AnimatedtoggleNode1(1)

			  } 

			  if(DataJson.RL1_F == 1)
			  {
				AnimatedtoggleNode1(1)
				
			  }
			  else if(DataJson.RL1_F == 0)
			  {
				AnimatedtoggleNode1(1)
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

			
			  
			  
				LineND1 = true;
				LineDA1 = true;
				LineSSD1 = true;
		
	
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
		var TT_RL1_P = document.getElementById("RL1_P").value;
		console.log("ĐIỀU KHIỂN RELAY -  TT_RL1_P:" + TT_RL1_P);
		if(TT_RL1_P == "ON")
		{
			mqttClient.send(topicpub,"{\"RL1_P\":\"0\"}");
		}
		else if(TT_RL1_P == "OFF")
		{
			mqttClient.send(topicpub,"{\"RL1_P\":\"1\"}");
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
		var TT_RL1_F = document.getElementById("RL1_F").value;
		console.log("ĐIỀU KHIỂN Fan -  TT_RL1_F:" + TT_RL1_F);
		if(TT_RL1_F == "ON")
		{
			mqttClient.send(topicpub,"{\"RL1_F\":\"0\"}");
		}
		else if(TT_RL1_F == "OFF")
		{
			mqttClient.send(topicpub,"{\"RL1_F\":\"1\"}");
		}
	}
}
  
}


