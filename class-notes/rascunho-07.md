1 AND 0 = 0
0 AND 0 = 0
1 AND 1 = 1
0 AND 1 = 0


0000 0001
0101 0101
--------- OR
0101 0101




/* A→$t0, B→t1 */ // Save <- $s0
a) A = B AND Save[A]; 

    add $t3, $t0, $t0
    add $t3, $t3, $t3
    add $t3, $s0, $t3
    lw $t3, 0($t3)
    and $t0, $t1, $t3

/* A→$t0, B→$t1, C→$t2 */
b) If A > B AND C == A 
Then C = A 
Else Return;

slt $t3, $t1, $t0
beq $t3, $zero, ELSE
bne $t2, $t0, ELSE
add $t2, $t0, $zero
ELSE:
    jr $ra


/* Save[ ]→ $s0, Matriz[ ]→ $s1, A <- $t1, B <- $t2, C <- $t3 */

c) If A>4 OR A<10 
Then Save[A] = Matriz[B] 
Else B = 4 + Save[A]; 

addi $t4, $zero, 4
addi $t5, $zero, 10
slt $t6, $t4, $t1 // 4 < A
slt $t7, $t1, $t5 // A < 10
or $t8, $t6, $t7
beq $t8, $zero, ELSE

add $t2, $t2, $t2
add $t2, $t2, $t2 // 4B
add $t2, $t2, $s1
lw $t2, 0($t2)

add $t1, $t1, $t1
add $t1, $t1, $t1 // 4A 
add $s0, $t1, $s0
sw $t2, 0($s0) // guardando o valor da matriz save[A] na posicao $t2

ELSE: B = 4 + Save[A]; 

add $t1, $t1, $t1
add $t1, $t1, $t1 // 4A 
add $t1, $t1, $s0
lw $t6, 0($t1) // Save[A]
addi $t2, $t6, 4












/* A→$t0, B→t1, C →$t2 */
d) A = (A AND B OR C); 











