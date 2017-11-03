(function(){
            var cDate = new Date();
            var cYear = cDate.getFullYear();
            var docDefinition = {
                content: [
                    {
                        text:'Computer Science'.toUpperCase(),
                        style: 'academicPlan',
                        alignment: 'right',
                        lineHeight: 0.9
                    },
                    {
                        text:'COMPSCIMS',
                        style: 'academicSubPlan',
                        alignment: 'right'
                                
                    },
                    {
                        text : 'CPS Final',
                        style: 'header'
                    },
                    {
                        text : cYear-2 +" - "+ cYear,
                        style: 'headerSub'
                    },
                    {
                    
                    columns:[
                            
                               {
                                    text:'LastName,',
                                    style: 'lastName',
                                    width: 'auto',
                                    margin: [0, -4, 0, 0],
                                    lineHeight: 0.5
                                },
                                {
                                    text:'FirstName',
                                    style: 'firstName',
                                    width: 'auto',
                                    margin: [4, 0, 8, 0],
                                    lineHeight: 0.5
                                },
                                {
                                    text: '1479000',
                                    style: 'id',
                                    width: 'auto',
                                    lineHeight: 0.5
                                }
                            
                    ]
                    },
                    
                    '   ',
      
                    {
                        text : 'REQUIRED FOUNDATION COURSES:',
                        style:'subHeader'
                    },
                    {
                      ul: [
                        {text: 'Minimum grade requirement: C+.', style:'importantNotes'},
                        {text: 'All foundation classes listed below are required as per the acceptance letter and are in addition to Program Requirements.',style:'importantNotes'},
                        {text: 'All classes completed at UHCL count toward the UHCL Grade Point Average.',style:'importantNotes'},
                        
                      ]
                      
                    },
                   
                  {
			        table: {
				        headerRows: 0,
				        widths: [46, '*'],
				        body: [
				            	
				            	[{border: [false, false, false, true],text:'A',style:'tableContent',alignment:'center'},{text:'CSCI 5035 or WRIT 3315 Scientific or Technical Writing',style:'tableContent'}],
					            [{border: [false, false, false, true],text:'Summer 17',style:'tableContent',alignment:'center'},{text:'CSCI 4333 Design of Database Systems',style:'tableContent'}],
            					[{border: [false, false, false, true],text:'3',style:'tableContent',alignment:'center'},{text:'CENG 3351 Computer Architecture',style:'tableContent'}],
            				    [{border: [false, false, false, true],text:'3',style:'tableContent',alignment:'center'},{text:'CENG 3351 Computer Architecture',style:'tableContent'}],
            			    	[{border: [false, false, false, true],text:'3',style:'tableContent',alignment:'center'},{text:'CENG 3351 Computer Architecture',style:'tableContent'}],
            			    	[{border: [false, false, false, true],text:'3',style:'tableContent',alignment:'center'},{text:'CENG 3351 Computer Architecture',style:'tableContent'}],
            			    	[{border: [false, false, false, true],text:'3',style:'tableContent',alignment:'center'},{text:'CENG 3351 Computer Architecture',style:'tableContent'}]
		        	
			            ]
			        },
			        layout: {
            				defaultBorder: false,
            			},
            		lineHeight: 0.7
	            	},

                    
                    {
                        text : 'PROGRAM REQUIREMENTS',
                        style:'subHeader',
                        alignment:'center'
                    },
                    {
                      text:'36 hours Extended Coursework option  or  33 hours Thesis option  (plus any foundations noted above)',
                      style: 'importantNotes',
                      alignment:'center'
                    },
                    {
                        text : '',
                        lineHeight: 0.2
                    },
                    
                    {   columns:[
                            {
                                text : 'CORE REQUIREMENTS:',
                                style:'subHeader'
                            },
                            {
                                text: '15 hours', 
                                style: 'tableHeader',
                                alignment:'right',
                                margin: [0, 0, 25, 0]
                            }
                            ]
                    },
                   {
			        table: {
				        headerRows: 0,
				        widths: [46, '*', 50],
				        body: [
				            	
				            	[{border: [false, false, false, true],text:'A',style:'tableContent',alignment:'center'},{text:'CSCI 5134 Concurrent Programming and Software Modeling',style:'tableContent'}, {text:'3',style:'tableContent'}],
					            [{border: [false, false, false, true],text:'Summer 17',style:'tableContent',alignment:'center'},{text:'CSCI 5333 Database Management Systems',style:'tableContent'}, {text:'3',style:'tableContent'}],
            					[{border: [false, false, false, true],text:'3',style:'tableContent',alignment:'center'},{text:'CSCI 5432 Design and Analysis of Algorithms',style:'tableContent'}, {text:'3',style:'tableContent'}],
            					[{border: [false, false, false, true],text:'3',style:'tableContent',alignment:'center'},{text:'CSCI 5531 Advanced Operating Systems',style:'tableContent'}, {text:'3',style:'tableContent'}],
            					[{border: [false, false, false, true],text:'3',style:'tableContent',alignment:'center'},{text:'CSCI 6530 Research Methods in Computer Science',style:'tableContent'},{text:'3',style:'tableContent'}]
            					
            				]
		        	},
			        layout: {
            				defaultBorder: false,
            			},
            		lineHeight: 0.7
	            	},
                    '   ',
                    {
                        text : 'PROGRAM ELECTIVES:',
                        style:'subHeader'
                    },
                    {
                      ul: [
                          
                        {text: 'Electives must be selected before registration for the course, in consultation with faculty advisor.', style:'importantNotes'},
                        {text: '* Only ONE of the following classes are accepted for the degree: SWEN 5130 OR SWEN 5431 OR CENG 5330.',style:'importantNotes'},
                        {text: '4000 level FOUNDATION courses are NOT allowed. Check the CSCI website for the list of foundation courses.',style:'importantNotes',lineHeight: 0},
                        
                        ]
                        
                    },
                     {
			        table: {
				        headerRows: 0,
				        widths: [46,0, '*', 96,30,20,48],
				        body: [
				            	[{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'}, {text: '12 hours', style: 'tableHeader'},{text: 'Faculty initial changes', style: 'tableHeader'}],
				            	[{border: [false, false, false, true],text:'A',style:'tableContent',alignment:'center'},{text: '', style: 'tableContent'},{border: [false, false, false, true],text:'CSCI 5134 Concurrent Programing and Software Modeling',style:'tableContent'},{text:'CINF/CSCI',style:'tableContent'},{text:'5x3x-6x3x',style:'tableContent'}, {text:'3',alignment:'center',style:'tableContent'},{border: [false, false, false, true],text:'',style:'tableContent',alignment:'center'}],
					            [{border: [false, false, false, true],text:'A-',style:'tableContent',alignment:'center'},{text: '', style: 'tableContent'},{border: [false, false, false, true],text:'CSCI 5333 Database Management Systems',style:'tableContent'},{text:'CINF/CSCI',style:'tableContent'},{text:'5x3x-6x3x',style:'tableContent'}, {text:'3',alignment:'center',style:'tableContent'},{border: [false, false, false, true],text:'',style:'tableContent',alignment:'center'}],
            					[{border: [false, false, false, true],text:'Fall 18',style:'tableContent',alignment:'center'},{text: '', style: 'tableContent'},{border: [false, false, false, true],text:'CSCI 5432 Design and Analysis of Algorithms',style:'tableContent'},{text:'CINF/CSCI',style:'tableContent'},{text:'5x3x-6x3x',style:'tableContent'}, {text:'3',alignment:'center',style:'tableContent'},{border: [false, false, false, true],text:'',style:'tableContent',alignment:'center'}],
            					[{border: [false, false, false, true],text:'Spring 17',style:'tableContent',alignment:'center'},{text: '', style: 'tableContent'},{border: [false, false, false, true],text:'CSCI 5531 Advanced Operating Systems',style:'tableContent'},{text:'CINF/CENG/CSCI/SWEN*',style:'tableContent'},{text:'4x3x-6x3x',style:'tableContent'}, {text:'3',alignment:'center',style:'tableContent'},{border: [false, false, false, true],text:'',style:'tableContent',alignment:'center'}],
            					
            				]
		        	},
			        layout: {
            				defaultBorder: false,
            			},
            		lineHeight: 0.7,
	            	margin: [0, -10, 0, 0]
	            	},
	            	 '   ',
                    {
                        text:[
                            {
                                 text : 'COMPLETION OPTION:  ',
                                style:'subHeader'
                            },
                            {
                                 text:'Extended Coursework 9 hours - or - Thesis 6 hours',
                                 style: 'importantNotes'
                                 
                            }
                    ]
                        
                    },
                    {
                        text : 'Extended Coursework Option',
                        bold:'true',
                        fontSize:10
                    },
                    {
			        table: {
				        headerRows: 0,
				        widths: [46,0, '*', 96,30,20,48],
				        body: [
				            	[{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'}, {text: '9 hours', style: 'tableHeader'},{text: 'Faculty initial changes', style: 'tableHeader'}],
				            	[{border: [false, false, false, true],text:'A',style:'tableContent',alignment:'center'},{text: '', style: 'tableContent'},{border: [false, false, false, true],text:'CSCI 5232 Concepts of Prog Lang',style:'tableContent'},{text:'CINF/CSCI',style:'tableContent'},{text:'5x3x-6x3x',style:'tableContent'}, {text:'3',alignment:'center',style:'tableContent'},{border: [false, false, false, true],text:'',style:'tableContent',alignment:'center'}],
					            [{border: [false, false, false, true],text:'A',style:'tableContent',alignment:'center'},{text: '', style: 'tableContent'},{border: [false, false, false, true],text:'CSCI 5633 Web Database Development',style:'tableContent'},{text:'CINF/CSCI',style:'tableContent'},{text:'5x3x-6x3x',style:'tableContent'}, {text:'3',alignment:'center',style:'tableContent'},{border: [false, false, false, true],text:'',style:'tableContent',alignment:'center'}],
            					[{border: [false, false, false, true],text:'A',style:'tableContent',alignment:'center'},{text: '', style: 'tableContent'},{border: [false, false, false, true],text:'CSCI 6838 Research Project and Seminar: take during last 12 hours. Prerequisites enforced',style:'tableContent'},{text:'E-mail instructor for permission to register', colSpan: 2, style:'tableContent'},{text:'',style:'tableContent'}, {text:'3',alignment:'center',style:'tableContent'},{border: [false, false, false, true],text:'',style:'tableContent',alignment:'center'}],
            					
            				]
		        	    },
			        layout: {
            				defaultBorder: false,
            			},
            		lineHeight: 0.7,
	            	margin: [0, -16, 0, 0]
	            	},
                       '   ',
                    {
                        text : 'Thesis Option',
                        bold:'true',
                        lineHeight: 0.2,
                        fontSize:10
                    },
                    {
			        table: {
				        headerRows: 0,
				        widths: [46,'*', 250,30,50],
				        body: [
				            	[{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'},{text: '', style: 'tableHeader'}, {text: '6 hours', alignment:'right', style: 'tableHeader'}],
				            	[{border: [false, false, false, true],text:'A',style:'tableContent',alignment:'center'},{text:'CSCI 6939 Master’s Thesis',style:'tableContent'},{colSpan:2 ,text:'Instruction Packet required before attempting Thesis proposal. Packet is',style:'tableContent'},{text:'',style:'tableContent'}, {text:'3',alignment:'center',style:'tableContent'}],
					            [{border: [false, false, false, true],text:'A',style:'tableContent',alignment:'center'},{text:'CSCI 6939 Master’s Thesis',style:'tableContent'},{colSpan:2 ,text:'ONLY available online at http://prtl.uhcl.edu/portal/page/portal/SCE/sce_thesis', colSpan: 2, style:'tableContent'},{text:'',style:'tableContent'}, {text:'3',alignment:'center',style:'tableContent'}],
            					
            				]
		        	},
			        layout: {
            				defaultBorder: false,
            			},
	            	lineHeight: 0.7
	            	},
                        '   ',
                    
                    {
                        text : 'Optional Sub Plans Elective Choices',
                        style:'subHeader'
                        
                    },
                    
                    {
                        table: {
                            headerRows: 0,
                            widths: ['*', '*', '*'],
                            
                            body: [
                                [ {text:'Database Systems',style:'subplanHeader',decoration: 'underline',lineHeight: 1}, {text:'Network Performance and Security',style:'subplanHeader',decoration: 'underline',lineHeight: 1}, {text:'Data Mining and Computational Bioinformatics',style:'subplanHeader',decoration: 'underline',lineHeight: 1}],
                                [ { text: 'CSCI 5433 Object Oriented database Systems', style:'subplanContent' },{ text: 'CENG 5333 Network Performance Analysis', style:'subplanContent' }, { text: 'BIOT 5733 Bioinformatics', style:'subplanContent' }],
                                [ { text: 'CSCI 5533 Distributed Information Systems', style:'subplanContent' }, { text: 'CSCI 5132 Internet Protocols', style:'subplanContent' }, { text: 'CENG 5634 Artificial Neural Networks', style:'subplanContent' }],
                                [ { text: 'CSCI 5633 Web Database Development', style:'subplanContent' }, { text: 'CSCI 5233 Computer Security and Integrity', style:'subplanContent' }, { text: 'CSCI 5530 Pattern Classification', style:'subplanContent' }],
                                [ { text: 'CSCI 5833 Data Mining: Tools and Techniques', style:'subplanContent' }, { text: 'CSCI 5234 Web Security', style:'subplanContent' }, { text: 'CSCI 5532 Pattern Recognition and Image Processing', style:'subplanContent' }],
                                [ { text: '', style:'subplanContent' }, { text: 'CSCI 5235 Network Security', style:'subplanContent' }, { text: 'CSCI 5833 Data Mining: Tools and Techniques', style:'subplanContent' }],
                                [ { text: '', style:'subplanContent' }, { text: 'CSCI 5631 Fdn for Service-Oriented Architecture', style:'subplanContent' }, { text: 'CSCI 5933 Computational Bioinformatics', style:'subplanContent' }]
                            ]
                        },
                        layout: 'headerLineOnly',
                        lineHeight: 0.5
                    },
                    {
                        text : 'IMPORTANT INFORMATION:',
                        style:'subHeader'
                        
                    },
                    {
                        ul: [
                        {text: 'CHANGE: All subsequent substitutions for the classes listed above must be approved BEFORE enrolling in the substitute class. The faculty advisor indicates the substitution and initials the change on the CPS (on a print copy or on the electronic copy located in the network folder). Faculty sends the updated Final CPS (e-mail or hardcopy) to SCE Academic Advising sceadvising@uhcl.edu. ', style:'importantNotes'},
                        {text: 'A combined maximum of 6 hours of Independent Study/Coop/Internship may apply to the degree (if allowed for this degree).',style:'importantNotes'},
                        {text: 'A maximum of 6 hours of grades in the C/C+ range are allowed. Grades of C- and below will not apply toward the degree. This limit does not include foundations, if assigned.',style:'importantNotes'},
                        {text: 'Minimum cumulative GPA for graduation is 3.000. The GPA includes ALL classes taken at UHCL, including foundation courses if any were assigned.',style:'importantNotes'},
                        {text: 'Continuous enrollment must be maintained by completing at least one class each year for the CPS to remain valid. Five years are allowed for degree completion.',style:'importantNotes'}
                      ]   
                    },
                    '   ',
                    {
			        table: {
				        headerRows: 0,
				        widths: ['*',12,50,'*'],
				        body: [
				                [{border: [false, false, false, true],text:'',style:'tableContent',alignment:'left'},{colSpan:3,text: 'Your Final CPS will be e-mail to your student e-mail account', style: 'tableContent'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'} ],
				            	[{border: [false, false, false, false],text:'Student',style:'tableContent',alignment:'left'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'} ],
					            [{border: [false, false, false, false],text:'',style:'tableContent',alignment:'left'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'} ],
					            [{border: [false, false, false, false],text:'',style:'tableContent',alignment:'left'},{border: [false, false, false, false],text:'Date',style:'tableContent'},{border: [false, false, false, true],text: '', style: 'tableContent'},{text: '', style: 'tableContent'} ],
					            [{border: [false, true, false, false],text:'Dr.<Faculty Advisor>',style:'tableContent',alignment:'left'},{border: [false, false, false, false],text:'',style:'tableContent'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'}],
            					[{border: [false, false, false, false],text:'',style:'tableContent',alignment:'left'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'} ],
					            [{border: [false, false, false, false],text:'',style:'tableContent',alignment:'left'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'} ],
					            [{border: [false, false, false, false],text:'Academic Advisor/Date: '+ cDate.toLocaleDateString('en-US'),style:'tableContent',alignment:'left'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'},{text: '', style: 'tableContent'}],
            					
                                
            				]
		        	},
			        layout: {
            				defaultBorder: false,
            			}
	            	
	            	}
                    
                    
                    
                ],
                pageMargins: [30, 20, 30, 30],
                styles:{
                    
                    header:{
                                fontSize: 14,
                                bold: true,
                                alignment: 'center'
                    },
                    headerSub:{
                                fontSize: 10,
                                alignment: 'center'
                    },
                    subHeader:{
                                fontSize: 12,
                                bold: true
                    },
                    importantNotes:{
                                fontSize: 7.5,
                                italics: true
                    },
                    academicPlan:{
                                fontSize: 14,
                                bold: true
                    },
                    academicSubPlan:{
                                fontSize: 8,
                                italics: true
                    },
                    lastName:{
                                fontSize: 14,
                                bold: true
                    },
                    firstName:{
                                fontSize: 10,
                                bold: true
                    },
                    id:{
                                fontSize: 10
                    },
                    subplanHeader:{
                                fontSize:7,
                                bold:'true'
                       
                    },
                    subplanContent:{
                                fontSize:6,
                                
                    },
                    tableHeader:{
                                fontSize:8,
                                bold:true,
                                italics: true
                        
                    },
                    tableContent:{
                                fontSize:8,
                    }
                    
                }
                
            }
        
        
        function printpdf() {
            pdfMake.createPdf(docDefinition).open();
        }
        
        
        function downloadpdf() {
             pdfMake.createPdf(docDefinition).download('FinalCPS.pdf');
        }
        
        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getDataUrl((dataUrl) => {
        document.querySelector('#pdf').src = dataUrl;
        });
        
}());      
   