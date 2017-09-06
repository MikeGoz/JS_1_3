// task 1.3

process.stdin.setEncoding('utf-8');                    //  ustawienie enkodowania na string
process.stdin.on('readable', function() {
    var input = process.stdin.read();                  // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    if(input !== null) {                               // jesli cokolwiek wpisane to wyswietla..
        var instruction = input.toString().trim();
        var version = process.versions.node;           //przechowuje informacje na temat Node oraz komponentów   
        var system = process.env.os;                   //srodowisko dzialania Node
        switch (instruction) {
        case '/exit':   
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        case '/ver':
            process.stdout.write('Version: '+ version +'\n');
            break;
        case '/system':
            process.stdout.write('System: '+ system +'\n');
            break;
        default: 
            process.stderr.write('Wrong instruction!\n');
        }                 
    }
});