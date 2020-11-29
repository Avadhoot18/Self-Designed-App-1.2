class Form {
    constructor(){
        this.name = createInput('name');
        this.email = createInput('email');
        this.greeting1 = createElement('h2');
        this.greeting2 = createElement('h2');
        this.title = createElement('h1');
        this.register = createButton('Register');
        this.image = loadImage('ThanksgivingImage.png');
    }
    
    display(){
        this.title.html('Study for Exams, Learn for Life');
        image(this.image,displayWidth-50,0,50,50);
        this.title.position(displayWidth/2-50, 0);
        this.name.position(displayWidth/2-40, displayHeight/2-80);
        this.register.position(displayWidth/2+30, displayHeight/2);
        this.email.position(displayWidth/2-40, displayHeight/2-50);
        this.register.mousePressed(()=>{
            this.register.hide();
            this.name.hide();
            this.email.hide();
            name = this.name.value();
            email = this.email.value();
            index = index+1;
            user.updateUsercount(index);
            user.updateUser(name,email);
            
            console.log(name);
            console.log(email);
            this.greeting1.html("Welcome "+ name);
            this.greeting2.html("Choose your examination paper from the given list");
            this.greeting1.position(displayWidth/2+100, 50);
            this.greeting2.position(displayWidth/2-100, 70);
            this.paper1 = createButton('Paper1');
            this.paper2 = createButton('Paper2');
            this.paper3 = createButton('Paper3');
            this.paper4 = createButton('Paper4');
            this.paper1.position(displayWidth/2-40, displayHeight/2);
            this.paper2.position(displayWidth/2-40,displayHeight/2+20);
            this.paper3.position(displayWidth/2-40,displayHeight/2+40);
            this.paper4.position(displayWidth/2-40,displayHeight/2+60);
            this.paper1.mousePressed(()=>{
                this.paper1.hide();
                this.paper2.hide();
                this.paper3.hide();
                this.paper4.hide();
                this.greeting3 = createElement('h3');
                this.greeting3.html("Hello " + name);
                this.greeting3.position(displayWidth/2-40,displayHeight/2-30);
                this.paper1title = createElement('h3');
                this.paper1title.html("Click on the link below to take your exams");
                this.paper1title.position(displayWidth/2-50,displayHeight/2-50);
                this.paper1content = createElement('h3');
            this.paper1content.html("google");
            this.paper1content.position(displayWidth/2,displayHeight/2);    
            })
            this.paper2.mousePressed(()=>{
                this.paper1.hide();
                this.paper2.hide();
                this.paper3.hide();
                this.paper4.hide();

                this.paper2title = createElement('h3');
                this.paper2title.html("Click on the link below to take your exams");
                this.paper2title.position(displayWidth/2-50,displayHeight/2-50);
                this.paper2content = createElement('h3');
            this.paper2content.html("google");
            this.paper2content.position(displayWidth/2,displayHeight/2);    
            })
            this.paper3.mousePressed(()=>{
                this.paper1.hide();
                this.paper2.hide();
                this.paper3.hide();
                this.paper4.hide();

                this.paper3title = createElement('h3');
                this.paper3title.html("Click on the link below to take your exams");
                this.paper3title.position(displayWidth/2-50,displayHeight/2-50);
                this.paper3content = createElement('h3');
            this.paper3content.html("google");
            this.paper3content.position(displayWidth/2,displayHeight/2);    
            })
            this.paper4.mousePressed(()=>{
                this.paper1.hide();
                this.paper2.hide();
                this.paper3.hide();
                this.paper4.hide();

                this.paper4title = createElement('h3');
                this.paper4title.html("Click on the link below to take your exams");
                this.paper4title.position(displayWidth/2-50,displayHeight/2-50);
                this.paper4content = createElement('h3');
            this.paper4content.html("google");
            this.paper4content.position(displayWidth/2,displayHeight/2);    
            })
            
        }) 
    }
}