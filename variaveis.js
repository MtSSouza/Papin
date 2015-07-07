var objeto = function(myAlpha) {
	this.myAlpha = 0;
}
var preto = new objeto(this.myAlpha = 0);



 var certo1_x = 1500;
        certo1_y = 100;
        certo1_w = 50;
        certo1_h = 50
        certo2_x = 1500;
        certo2_y = 100;
        certo2_w = 50;
        certo2_h = 50
        certo3_x = 1500;
        certo3_y = 100;
        certo3_w = 50;
        certo3_h = 50
        certo4_x = 1500;
        certo4_y = 100;
        certo4_w = 50;
        certo4_h = 50
        certo5_x = 1500;
        certo5_y = 100;
        certo5_w = 50;
        certo5_h = 50
        certo6_x = 1500;
        certo6_y = 100;
        certo6_w = 50;
        certo6_h = 50

        var achado1_x = 1500;
        achado1_y = 493;
        achado1_w = 20;
        achado1_h = 20
         achado2_x = 1500;
        achado2_y = 493;
        achado2_w = 20;
        achado2_h = 20
         achado3_x = 1500;
        achado3_y = 493;
        achado3_w = 20;
        achado3_h = 20
         achado4_x = 1500;
        achado4_y = 493;
        achado4_w = 20;
        achado4_h = 20
         achado5_x = 1500;
        achado5_y = 493;
        achado5_w = 20;
        achado5_h = 20
         achado6_x = 1500;
        achado6_y = 493;
        achado6_w = 20;
        achado6_h = 20


        var jogar = {
            x: 540,
            y: 200,
            w: 163,
            h: 93
        }
        instrucoesM = {
            x: 480,
            y: 315,
            w: 292,
            h: 53
        }
        creditosM = {
            x: 525,
            y: 390,
            w: 206,
            h: 67
        }
        super_seta = {
            x: 95,
            y: 515,
            w: 48,
            h: 35
        }
        continuacao = {
            x: 480,
            y: 490,
            w: 282,
            h: 58
        }

        var pauseM = {
            x: 130,
            y: 55,
            w: 550,
            h: 400
        }
        textoM = {
            x: 0,
            y: 0,
            w: 800,
            h: 600
        }
        gameoverM = {
            x: 0,
            y: 0,
            w: 800,
            h: 600
        }

        var menu = new Image;
        creditos = new Image;
        instrucoes = new Image;
        botao_jogar = new Image;
        botao_instrucoes = new Image;
        botao_creditos = new Image;
        seta = new Image;
        continuar = new Image;
        var achado1 = new Image
         achado2 = new Image
         achado3 = new Image
         achado4 = new Image
         achado5 = new Image
         achado6 = new Image
        var texto = new Image;
        texto2 = new Image
         texto3 = new Image
         texto4 = new Image
         texto5 = new Image
         texto6 = new Image
         fundo_fase1 = new Image
         barra_ferramentas1 = new Image
         pontuacao1 = new Image;
        certo1 = new Image;
        certo2 = new Image;
        certo3 = new Image;
        certo4 = new Image;
        certo5 = new Image;
        certo6 = new Image;
        var fundo_fase2 = new Image
         barra_ferramentas2 = new Image
         texto2_1 = new Image;
        texto2_2 = new Image
         texto2_3 = new Image
         texto2_4 = new Image
         texto2_5 = new Image
         texto2_6 = new Image
         pontuacao2 = new Image;
        var fundo_fase3 = new Image
         barra_ferramentas3 = new Image
         texto3_1 = new Image;
        texto3_2 = new Image
         texto3_3 = new Image
         texto3_4 = new Image
         texto3_5 = new Image
         texto3_6 = new Image
        var gameover = new Image;
        pause = new Image;
        manutencao = new Image;

        menu.src = 'imagens/Menu.png'
        creditos.src = 'imagens/creditos3.png'
        instrucoes.src = 'imagens/instrucoes3.png'
        botao_jogar.src = 'imagens/jogar.png'
        botao_instrucoes.src = 'imagens/instrucoes.png'
        botao_creditos.src = 'imagens/creditos.png'
        seta.src = 'imagens/seta.png'
        continuar.src = 'imagens/continuar.png'
        achado1.src = 'imagens/achado1.png'
        achado2.src = 'imagens/achado2.png'
        achado3.src = 'imagens/achado3.png'
        achado4.src = 'imagens/achado4.png'
        achado5.src = 'imagens/achado5.png'
        achado6.src = 'imagens/achado6.png'
        texto.src = 'imagens/Texto_PeleDeAnimais.png'
        texto2.src = 'imagens/Texto_MachadoDePedra.png'
        texto3.src = 'imagens/Texto_ChifreDeAnimal.png'
        texto4.src = 'imagens/Texto_Madeira.png'
        texto5.src = 'imagens/Texto_PedraLascada.png'
        texto6.src = 'imagens/Texto_ResquicioDeFogueira.png'
        pontuacao1.src = 'imagens/pontuacao1.png'
        fundo_fase1.src = 'imagens/fundo_fase1.png'
        barra_ferramentas1.src = 'imagens/barra_ferramentas1.png'
        certo1.src = 'imagens/certo.png'
        certo2.src = 'imagens/certo.png'
        certo3.src = 'imagens/certo.png'
        certo4.src = 'imagens/certo.png'
        certo5.src = 'imagens/certo.png'
        certo6.src = 'imagens/certo.png'
        fundo_fase2.src = 'imagens/fundo_fase2.png'
        barra_ferramentas2.src = 'imagens/barra_ferramentas2.png'
        texto2_1.src = 'imagens/Texto_Mamute.png'
        texto2_2.src = 'imagens/Texto_Frutas.png'
        texto2_3.src = 'imagens/Texto_Lanca.png'
        texto2_4.src = 'imagens/Texto_Anzol.png'
        texto2_5.src = 'imagens/Texto_AlavancaDePropulsao.png'
        texto2_6.src = 'imagens/Texto_PedraUtilizadaParaProduzirFogo.png'
        pontuacao2.src = 'imagens/pontuacao2.png'
        fundo_fase3.src = 'imagens/fundo_fase3.png'
        barra_ferramentas3.src = 'imagens/barra_ferramentas3.png'
        texto3_1.src = 'imagens/Texto_VenusDeLaussel.png'
        texto3_2.src = 'imagens/Texto_Sangue.png'
        texto3_3.src = 'imagens/Texto_VenusDeBrassempouy.png'
        texto3_4.src = 'imagens/Texto_PinturaRupestre.png'
        texto3_5.src = 'imagens/Texto_ArcoEFlecha.png'
        texto3_6.src = 'imagens/Texto_VenusDeWillendorf.png'
        gameover.src = 'imagens/fim.jpg'
        pause.src = 'imagens/pause.png'
        manutencao.src = 'imagens/manutencao.png'

        var trilha_1 = new Audio;
        trilha_1.src = 'sons/trilha1.mp3'
        var trilha_2 = new Audio;
        trilha_2.src = 'sons/trilha2.mp3'

        var achoutudo = false
         cronometro = 125
        var achoutudo2 = false
         cronometro2 = 125
        var achoutudo3 = false
         cronometro3 = 120
        var pontos = 0
        var pontos2 = 0


        var tocha_pontos = 100;
        pele_pontos = 240;
        madeira_pontos = 270;
        machado_pontos = 300;
        pedra_pontos = 450;
        chifre_pontos = 500
        var lanca_pontos = 100;
        fruta_pontos = 240;
        mamute_pontos = 270;
        anzol_pontos = 300;
        fosforo_pontos = 450;
        propulsor_pontos = 500

        var mouse_x = 0;
        mouse_y = 0;
        click = false

        var play = false;
        play2 = false;
        play3 = false;
        how = false;
        credit = false;
        pausar = false;
        pausar2 = false;
        pausar3 = false;
        pele = false;
        machado = false;
        madeira = false;
        chifre = false;
        pedra = false;
        tocha = false;
        mamute = false;
        fruta = false;
        lanca = false;
        anzol = false;
        propulsor = false;
        fosforo = false;
        arco = false;
        pintura = false;
        intersecao1 = false;
        sangue = false;
        venus_brassem = false;
        venus_laussel = false;
        venus_willend = false;
        intersecao2 = false;
        click_ = true;
        main = true;
		
		
