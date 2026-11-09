
```c

void calculo(int a, int b, int c, int array[]) {
    for (int i = 0; i < array[a + (b + i)]; i++)
    {
        if (a < i)
            c = a - i;
        else if (b + i <= a)
            c = b - i;
        else
            c = a + b;

        do {
            switch (c) {
                case 1:
                    c = c + a;
                    break;
                case 2:
                    c = c - a;
                    break;
                case 3:
                    c = c + b;
                    break;
                default:
                    c++;
            }
        } while (c != 10);

        array[a + (b + i)] = array[a] + (c + a);
    }
}

```
AGORA EM MIPS:

// array = $s0
// a = $a0
// b = $a1
// c = $a2


Proc-Calculo:

    // inputs $a0, $a1, $a2, $s0
    // outputs (n sei, funcao void)

    // for (int i = 0; i < array[a + (b + i)]; i++)
    add $t0, $zero, $zero  
    LOOP:







// =======================

EXISTE
<
>=


NAO EXITE
>

// =======================



vetor-a = 7
j = 5
    


if (Vetor-A[i] < j){
    t0 = 1
}else{
    t0 = 0
}

////////////////////////////////////
slt $t0, $a1, $t2
//////////////////////////////////////
if (j < Vetor-A[i]){
    t0 = 1
}else{
    t0 = 0
}
/////////////////////////////


































