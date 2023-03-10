class Forms{
    constructor(){
    this.usuario = createInput("").attribute("placeholder","Introduce nombre de usuario");
    this.contraseña = createInput("").attribute("placeholder","Introduce contraseña");
    this.inicio = createButton("Aceptar");
    this.omitir =createButton("Omitir");
    this.ingresar =createButton("Ingresar")
    this.greeting =createElement("h3")
    }

    //Función posiciones
    setElementsPositions(){
        this.usuario.position(width/2,height/2-130);
       this.contraseña.position(width/2,height/2-80);
       this.inicio.position(width/2,height/2-1);
       this.omitir.position(width/2+100,height/2+15);
       this.ingresar.position(width/2,height/2+70);
       this.greeting.position(width/2,height/2+90);

    }

    setElementsStyle(){
        this.usuario.class("customInput");
        this.contraseña.class("customInput");
        this.inicio.class("customButton");
        this.omitir.class("customButton");
        this.ingresar.class("customButton");
        this.greeting.class("greeting")

    }
    //Metodo que esconde los elementos al ocurrir un evento
    hide(){
        this.usuario.hide();
        this.contraseña.hide();
        this.inicio.hide();
        this.omitir.hide();
        this.ingresar.hide();

    }

    HandleMousePressed(){
        this.inicio.mousePressed(() => {
            this.usuario.hide();
            this.contraseña.hide();
            this.inicio.hide();
            this.omitir.hide();
            this.ingresar.hide();
            var mensaje=`
            hola ${this.usuario.value()}
            </br>bienvenidos`;
            this.greeting.html(mensaje);
            this.getUsuario();
        })
    }

    display(){
        this.setElementsPositions();
        this.setElementsStyle();
        this.HandleMousePressed();
    }
static getUsuario(){
    var usuarioRef=dataBase.ref("usuarios");
    usuarioRef.on("value",data=>{
        todosLosUsuarios=data.val();
        
    })
    console.log(todosLosUsuarios)
}
}