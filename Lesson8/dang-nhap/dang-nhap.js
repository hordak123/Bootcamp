let name = prompt('Your user name is: ');
if (name === 'Admin') {
    let password = prompt('Your user password is: ');
    if (password === 'TheMaster') {
        document.write('Welcome');
    } else if (password === '') {
        document.write('Canceled');
    } else {
        document.write('Wrong Password');
    }
} else if (name === '') {
    document.write('Canceled');
} else {
    document.write(`I don't know you`)
}