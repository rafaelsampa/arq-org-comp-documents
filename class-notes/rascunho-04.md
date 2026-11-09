
Aula anterior era basicamente usar todas as operacoes que o professor esta cobrando da gente, e escrevr codigos em C para depois traduzir para como se escreveria com assembly. Ao menos esse assembly que ele esta nos ensinando. Nao é ainda o literalmente assembly, creio eu. 


Uma maquina monoprocessador pode executar varias tarefas, e cada varias instrucoes. Mas todas elas vao usar o mesmo banco, mpot isso mudança de contexto é tao impotante, assim como a gerencia de memoria. 

Procedimentos aninhados. O que é um procedimento aninhado? É um procedimento que é definido dentro de outro procedimento. Isso permite que você organize melhor o código e crie funções que só são relevantes dentro do contexto de outra função.

Imagine que você tem uma função principal que realiza uma tarefa complexa, e dentro dessa função você precisa de uma subfunção para realizar uma parte específica dessa tarefa. Em vez de definir essa subfunção fora da função principal, você pode defini-la dentro dela, tornando-a um procedimento aninhado. Isso ajuda a manter o código mais limpo e organizado, além de limitar o escopo da subfunção, evitando que ela seja acessada de fora do contexto em que é relevante.

(codigo abaixo talvez nao tenha logica, é meramente exemplo ilustrativo)
main:
    add $t0, $t1, $t2
    sub $s0, $t0, $s1
    lw $t3, 8($s0)
    add $a0, $t1, $t3
    add $a1, $t4, $t0
    jal PROC-1
    add $v0, $v0, $a0
    add $v0, $a1, $t1
    sw $t0, 8($s0)

Proc-1:
    /*input: $a0, $a1
    output: $v0*/
    add $a0, $a0, $a0
    add $a2, $a1, $a2
    lw $s0, 8($a0)
    jal PROC-2
    add $s1, $a0, $s0
    add $v0, $s1, $a2
    jr $Ra

Proc-2:
    add $t0, $a0, $a2
    lw $s0, 8($t0)
    add $s1, $t2, $s0
    jr $Ra

Lembrando o professor realmente disse que esse programa nao deve fazernenhum sentido, eu apenas trascrevi ele do quadro. 

lembrandoa diferenca de jr e jal. 
Diferenca entre jr e jal é que o jal (jump and link) é usado para chamar uma função, e ele salva o endereço de retorno no registrador $ra (return address), permitindo que você retorne à instrução seguinte após a chamada da função. Já o jr (jump register) é usado para retornar de uma função, pulando para o endereço armazenado em um registrador, geralmente $ra, que contém o endereço de retorno.


"salva depois devolve", sempre lembrar disso pois no mips a convenção é que o registrador $ra é usado para armazenar o endereço de retorno quando uma função é chamada com jal, e depois você usa jr $ra para retornar a esse endereço após a execução da função. Isso garante que o fluxo do programa continue corretamente após a chamada da função. Ou seja, na pratica lembresse sempre de salvar o endereço de retorno com jal e depois usar jr $ra para voltar ao ponto correto do programa.

Assim como nunca se esqueça que o pc (program counter) é atualizado automaticamente para apontar para a próxima instrução a ser executada, e quando você usa jal, o pc é atualizado para o endereço da função chamada, e quando você usa jr $ra, o pc é atualizado para o endereço armazenado em $ra, permitindo que o programa continue de onde parou antes da chamada da função.

Por isso tambem que precisamos ter certeza de usar o lw ou sw para carregar ou armazenar valores na memoria que precisam ser preservados entre chamadas de função, pois os registradores podem ser sobrescritos durante a execução de funções chamadas.

precisamos no caso daquele coiso preservar os valores que queremos manter entre chamadas de função, e para isso usamos lw (load word) para carregar valores da memória para os registradores, e sw (store word) para armazenar valores dos registradores de volta na memória. Isso é crucial para garantir que os dados importantes não sejam perdidos durante a execução do programa, especialmente quando funções são chamadas e os registradores podem ser alterados.

precisamos salvar na pilha, os valores dos registradores que precisam ser preservados entre chamadas de função.

s nao é temporario, o "t" ou "a" sao temporarios. OU seja, o s precisamos salvar antes, na pilha. E qualquiera variavel que for temporaria, ou seja, que nao precisa ser preservada entre chamadas de funcao, pode ser usada livremente sem a necessidade de salvar na pilha.

Se nao tiver uma main, nao precisamos nospreocuupar com salvar os registradores, pois nao ha chamadas de funcao que possam sobrescrever os valores. No entanto, se houver uma main e outras funções sendo chamadas, é importante gerenciar corretamente a pilha para preservar os valores dos registradores que precisam ser mantidos entre as chamadas de função.

FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHRRRRRRRRRRRRRRRRRR

O professor no codigo ilustrativo intencionalmente na controlou os addi, sw, e lw, para nos adcionarmosnos mesmo. Assim conseguimos entender qual linha fazer cada um dos salvamentos em pilha para os registradores s, assim como os temporarios, e os argumentos. Tudo isso é importanteentender quando fazer, tudo pode mudar antes ou depois de uma linha, pois ass variaveis e conteudo dentro dos registradores, pois eles podem ser destruidos por chamadas de função, e precisamos garantir que os valores importantes sejam preservados corretamente.



































