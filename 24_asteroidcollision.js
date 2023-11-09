// Worst Case

function worstasteroidCollision(arr) {
    const result = [];

    for (let asteroid of arr) {
        let hasCollision = false;

        while (result.length > 0 && asteroid < 0 && result[result.length - 1] > 0) {
            const lastAsteroid = result.pop();

            if (Math.abs(asteroid) > lastAsteroid) {
                // The current asteroid destroys the previous one.
            } else if (Math.abs(asteroid) === lastAsteroid) {
                // Both asteroids annihilate each other.
                hasCollision = true;
                break;
            } else {
                // The previous asteroid destroys the current one.
                result.push(lastAsteroid);
                hasCollision = true;
                break;
            }
        }

        if (!hasCollision && asteroid < 0) {
            result.push(asteroid);
        } else if (asteroid > 0) {
            result.push(asteroid);
        }
    }

    return result;
}

// Best Case

function bestasteroidCollision(arr) {
 const stack = [];
    
    for (let asteroid of arr) {
        if (asteroid > 0) {
            stack.push(asteroid);
        } else {
            while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -asteroid) {
                stack.pop();
            }
            if (!stack.length || stack[stack.length - 1] < 0) {
                stack.push(asteroid);
            } else if (stack[stack.length - 1] === -asteroid) {
                stack.pop();
            }
        }
    }
    
    return stack;

}