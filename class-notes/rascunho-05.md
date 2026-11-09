


todas as rotinas sao orientadas a passar pelo "a" e terminar no "v". Pois o registrador $a0, $a1, $a2 e $a3 sao usados para passar argumentos para as funcoes, e os registradores $v0 e $v1 sao usados para retornar valores das funcoes. Isso significa que quando uma funcao e chamada, os argumentos sao passados nos registradores $a0 a $a3, e quando a funcao termina, o valor de retorno e colocado em $v0 (ou $v1 se houver mais de um valor de retorno).





operandos imediatos. direfencas entre suas versao nao imediatas. 
Explicando a diferenca entre instrucoes imediatas e nao imediatas, as instrucoes imediatas sao aquelas que utilizam um valor constante (imediato) como operando, enquanto as instrucoes nao imediatas utilizam valores armazenados em registradores ou na memoria. Por exemplo, a instrucao "addi" (add immediate) adiciona um valor imediato a um registrador, enquanto a instrucao "add" adiciona o valor de dois registradores. As instrucoes imediatas sao uteis para realizar operacoes simples com valores constantes, enquanto as instrucoes nao imediatas sao usadas para manipular dados armazenados em registradores ou na memoria.

addi: ADD inmediate, adiciona um valor imediato a um registrador. Por exemplo, "addi $t0, $t1, 5" adiciona o valor 5 ao conteúdo do registrador $t1 e armazena o resultado em $t0. DIferente do add, que adiciona o valor de dois registradores, como em "add $t0, $t1, $t2", que adiciona o conteúdo de $t1 e $t2 e armazena o resultado em $t0.

lui: Load Upper Immediate, carrega um valor imediato de 16 bits para os 16 bits superiores de um registrador, preenchendo os 16 bits inferiores com zeros. Por exemplo, "lui $t0, 0x1234" carrega o valor 0x12340000 no registrador $t0. Isso é útil para trabalhar com endereços de memória ou valores grandes que não cabem em um único valor imediato de 16 bits.

ori: OR Immediate, realiza uma operação lógica OR entre um registrador e um valor imediato, armazenando o resultado em outro registrador. Por exemplo, "ori $t0, $t1, 0xFF" realiza a operação OR entre o conteúdo do registrador $t1 e o valor imediato 0xFF, armazenando o resultado em $t0. Isso é útil para definir bits específicos em um registrador sem alterar os outros bits.





tamanho de um jump
j = 6
endereco = 26

ao todo 32 bits para o endereço, 6 bits para o opcode, totalizando 32 bits. O endereço de destino do jump é calculado combinando os 26 bits do endereço com os 4 bits mais significativos do PC (program counter) atual, resultando em um endereço de 32 bits. Isso permite que a instrução jump alcance qualquer endereço dentro do mesmo segmento de memória, garantindo que o fluxo do programa possa ser alterado de forma eficiente e controlada.

Como conseguimos colocar um endereço de 32 bits em uma instrução de jump que só tem 26 bits para o endereço? A resposta está na forma como o MIPS calcula o endereço de destino do jump. Quando a instrução jump é executada, os 26 bits do endereço são combinados com os 4 bits mais significativos do PC atual (program counter), que representam o segmento de memória em que a instrução está localizada. Isso permite que o endereço de destino seja expandido para 32 bits, garantindo que a instrução jump possa alcançar qualquer endereço dentro do mesmo segmento de memória.  Na verdade alguns bits sao irrelevantes, pois o MIPS trabalha com endereços alinhados a 4 bytes, então os dois bits menos significativos do endereço de destino são sempre zero. Isso significa que o endereço de destino efetivo é obtido multiplicando o valor de 26 bits por 4 (ou deslocando para a esquerda em 2 bits), garantindo que o endereço seja sempre um múltiplo de 4. Portanto, mesmo que a instrução jump tenha apenas 26 bits para o endereço, ela ainda pode alcançar qualquer endereço dentro do mesmo segmento de memória, graças à combinação com os bits mais significativos do PC e ao alinhamento dos endereços. Veja isso como palavra de 32 bits, mas o jump so precisa de 26 bits, pois os 2 bits menos significativos sao sempre zero, e os 4 bits mais significativos sao pegos do PC.





todo shift a nivel da posicao dos bits, pode ser uma divisao ou multiplicacao por 2, dependendo da direcao do shift. Por exemplo, um shift para a esquerda (left shift) multiplica o valor por 2 para cada posicao de shift, enquanto um shift para a direita (right shift) divide o valor por 2 para cada posicao de shift. Isso e util para realizar operacoes aritmeticas rapidas e manipulacao de bits em valores binarios.









