function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "Hello World!, I AICTE Query Bot welcome you to this interactive interface!";

		if(this.match('(forgotten+(\\s|!|\\.|$))'))
			return `Click on 'Request for Forgot Password' in http://www.aicte-india.org/ . Kindly fill
			User Id or Institute Permanent Id or any of the Application Ids and click on Submit
			Request. Click on Click Here to Make Payment and make Online Payment of Rs
			5000. Thereafter, please submit affidavit in concerned Regional Office to retrieve
			forgot password. Affidavit format is available in AICTE Approval Process
			Handbook.`;

		if(this.match('(user-id+(\\s|!|\\.|$))'))
			return `Please click on Request New User Id link on AICTE Web-portal or go to link
			http://portal.aicte-india.org/partnerportal_enu`;

		if(this.match('aicte web portal+(\\s|!|\\.|$)'))
			return "Yes. You can open AICTE’s Web Portal in any Web Browser.";

		if(this.match('pan+(\\s|!|\\.|$)'))
			return `No, PAN Card is not mandatory. Only User Id or any one of the Application Ids is
			required`;

		if(this.match('(invalid username)+(\\s|!|\\.|$)'))
			return `Recheck the login credentials (Case sensitive). Confirm whether someone else has
			logged in with the same credentials (Please note that per user only 3 sessions are
			allowed. Hence, if someone tries for 4th session then again invalid user name and
			password message will popup). If no session is live and still getting an invalid
			username and password message then you can "Request for forgot password".
			`;

		if(this.match('(open about us)+(\\s|!|\\.|$)')){
			window.open('https://www.aicte-india.org/about-us/overview', '_blank');
			return "Hope you reached your page!";
		}

		if(this.match('(open stats dashboard)+(\\s|!|\\.|$)') || this.match('stats+(\\s|!|\\.|$)') || this.match('open statistics+(\\s|!|\\.|$)') || this.match('statistics+(\\s|!|\\.|$)')){
			window.open('https://facilities.aicte-india.org/dashboard/pages/dashboardaicte.php', '_blank');
			return "Hope you reached your page!";
		}

		if(this.match('(contact)+(\\s|!|\\.|$)') || this.match('stats+(\\s|!|\\.|$)')){
			window.open('https://www.aicte-india.org/contact', '_blank');
			return "Hope you reached your page!";
		}

		if(this.match('(aicte)+(\\s|!|\\.|$)') || this.match('open aicte+(\\s|!|\\.|$)')){
			window.open('../../index.html', '_blank');
			return "Hope you reached your page!";
		}
		
		if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "I'm working good, How are you!";

		if(this.match('fine') || this.match('good') || this.match('great'))
			return "That's great, let's solve your query";
		
		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "what's so funny?";
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "don't be such a negative :(";
		
		if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return ["alright, see you around", "good teamwork!"];
		
		if(this.match('(dumb|stupid|is that all)'))
			return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];
		
		if(this.input == 'noop')
			return;
		
		return "Query Not found, We'll get back to you shortly! Please Enter your email address!";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
