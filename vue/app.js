

var vm = new Vue({

    el:'#app',
    methods:{
    	getSelected : function(){
    		var select = document.getElementById('select').selectedIndex;
    		return select;
    	}
    },
    data:{
    	selected_index : 1,
    	client:[
    			{
			    	basic_info:{
				        job_name : "carpentry-wood",
				        
				        client_name : "ahamd",
				        client_phone : "0999888777",
				        client_email : "ahamd@gmail.com",
				        client_city : "jablah",
				        
				        job_dis : "make door and window",
				        
				        start_date : "11/4/2020",
				        end_date : "9/9/2020",
				        
				        cost : "200000"
		    		},
		    		section2:{

		    		}
	    		},
	    		{
			    	basic_info:{
				        job_name : "carpentry-al",
				        
				        client_name : "ali",
				        client_phone : "0999666333",
				        client_email : "ali@gmail.com",
				        client_city : "lattakia",
				        
				        job_dis : "make bedroom",
				        
				        start_date : "11/4/2020",
				        end_date : "9/9/2020",
				        
				        cost : "1400000"
		    		},
		    		section2:{

		    		}
	    		}
    	]
    }

});