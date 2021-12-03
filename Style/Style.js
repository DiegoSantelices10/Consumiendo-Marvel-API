import { Center } from "native-base";

export default {
  input: {
    borderRadius: 10,
    padding: 10,
    
    marginTop: 10,
  },
  image: {
    height: 720,
    width: 425,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  box: {
    backgroundColor: "#000000",
    marginLeft: 13,
    height: 320,
    width: 400,
    opacity: 0.7,
    borderRadius: 10,
    shadow: '20px',
  },
  imageLogo: {
    height: 130,
    resizeMode: "cover",
    width: 360,
    marginTop: 10
  },
  imageComics: {
    height: 50,
    width: 50
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  bgContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#A0A0A0'
  },

  userContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },

  userImagen: {
    width: 180,
    height: 70,

  },

  camaraContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  camaraIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 15,
    bottom: 3
  },

  userNombre: {
    marginVertical: 10,
  },

  userTitulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },

  userSubTitulo: {
    textAlign: 'center',
    fontSize: 11,
    color: '#a537fd',
    paddingVertical: 5,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginVertical: 15,
  },

  iconoContainer: {
    flex: 1.5,
    justifyContent: 'center'
  },

  tituloContainer: {
    flex: 8.5,
    justifyContent: 'center'
  },

  tituloTxt: {
    fontSize: 13
  },
  difuminado: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  fondoImagen: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  buttonSingIn: {
    top: 200,
    width: 360,
    marginLeft: 32
  },

  userImagenLogin: {
    height: 130,
    resizeMode: "cover",
    width: 360,
    marginLeft: 31

  }
};
