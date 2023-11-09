// Traditional Approach
class TraditionalSolution {
    removeDups(str) {
        let temp = '' + str[0];
        for (let i = 0; i < str.length; i++) {
            if (temp.indexOf(str[i]) == -1) {
                temp = temp + str[i];
            }
        }
        return temp;
    }
}

// Optimized Approach
class OptimizedSolution {
    removeDups(str) {
        const p = new Set(str);
        const t = [...p];
        return t.join("");
    }
}

// Another Approach
class AnotherSolution {
    removeDups(str) {
        const p = new Set(str);
        const t = [...p];
        return t.join("");
    }
}