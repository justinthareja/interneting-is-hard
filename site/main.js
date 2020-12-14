function main () {
    console.log('this should be first');
    setTimeout(function timeoutCallback() {
        console.log('this should be third');
    }, 0);
    console.log('this should be second');
}


main();