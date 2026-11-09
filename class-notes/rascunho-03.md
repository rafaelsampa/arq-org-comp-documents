Slide 22
COmpilacao comando IF como instrucao de desvio no assembly.

Quanto vale um L1?

- PC sempre aponta para a proxima instrucao/execucao
- if e else.
- Exit é um Label. Um local da memoria. 



slt, bne, beq, 

beq significa branch if equal, ou seja, se os dois registradores forem iguais, o fluxo do programa vai para o label especificado. Por exemplo, "beq $t0, $t1, L1" significa que se o conteúdo dos registradores $t0 e $t1 forem iguais, o programa irá pular para a instrução localizada no label L1. Mas ele esta limitado a pular no maximo 2^16 instrucoes, pois o offset do beq e de 16 bits. Isso significa que o beq pode pular para um label que esteja a uma distância de até 2^16 instruções da instrução beq, permitindo que o fluxo do programa seja alterado de forma eficiente dentro desse limite.

bne significa branch if not equal, ou seja, se os dois registradores não forem iguais, o fluxo do programa vai para o label especificado. Por exemplo, "bne $t0, $t1, L1" significa que se o conteúdo dos registradores $t0 e $t1 não forem iguais, o programa irá pular para a instrução localizada no label L1. Assim como o beq, o bne também está limitado a pular no máximo 2^16 instruções, devido ao offset de 16 bits. Isso permite que o bne altere o fluxo do programa de forma eficiente dentro desse limite.



Somanddo G a um item de um array, um elemento no vetor i


Loop: g = g + A[i];
      i = i + j;
      if(i! = h) goto loop;

Loop: add $t1, $s3, $s3
      add $t1, $t1
      ...


agora vamos conhecer uma nova instrucao. slt


O que é o slt? set less than, ele tem 3 parametros

nao existe maior que? quais sao as condicoes do slt que existem?

continua...

_____________



O que é o multiplex?

PRECISO entender com TOTALIDADE MESMO.

COmo eu chego de registradores que entram dem 32 bits parra multipllexadores para depois serem uma instrucao em $s0 e $s1 para uma operacao cmo um slt.

---------


diferenca de jr e jal




