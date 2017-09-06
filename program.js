// task 1.3

process.stdin.setEncoding('utf-8');        //  ustawienie enkodowania na string

process.stdin.on('readable', function() {
                                           // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if(input !== null) {                   // jesli cokolwiek wpisane to wyswietla..

        var instruction = input.toString().trim();
        
        switch (instruction) {
            
        case '/exit':	
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        
        case '/ver':
			console.log('Node version: ',process.versions.node);
            break;
		
		case '/system':
			console.log('System: ',process.env.os);
            break;
        
        default: 
            process.stderr.write('Wrong instruction!\n');
                                          
    	}
	}
});