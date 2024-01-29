import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['./src/cp/files/script.js', ...args], { stdio: 'inherit' });

    child.on('error', (err) => {
        console.error(`Child process error: ${err}`);
    });

    child.on('exit', (code, signal) => {
        console.log(`Child process exited with code ${code} and signal ${signal}`);
    });
};

spawnChildProcess(['foo', 'bar', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud']);
