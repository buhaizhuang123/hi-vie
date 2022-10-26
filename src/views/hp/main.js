// 插入排序
var cr = [1, 10, 9, 11, 1]
for (let j = 1; j < cr.length; j++) {
    var temp = cr[j];
    var z = j - 1;
    while (z >= 0 && temp < cr[z]) {
        cr[z + 1] = cr[z]
        z--;
    }
    cr[z + 1] = temp
}
console.log('插入排序算法', cr)

// 选择排序
var xz = [1, 10, 9, 11, 1]
for (let i = 0; i < xz.length; i++) {
    for (let j = i + 1; j < xz.length; j++) {
        if (xz[i] > xz[j]) {
            var now = xz[i];
            xz[i] = xz[j];
            xz[j] = now;
        }
    }
}
console.log('选择排序算法', xz)


// 冒泡排序
var mp = [1, 10, 9, 11, 1]
for (let i = 0; i < mp.length; i++) {
    for (let j = 0; j < mp.length - i; j++) {
        if (mp[j] > mp[j + 1]) {
            var now = mp[j];
            mp[j] = mp[j + 1];
            mp[j + 1] = now;
        }
    }
}
console.log('冒泡排序算法', mp)

function a() {

// 归并排序(合并排序)
    var gb = [1, 10, 9, 11, 1]


    function sort(arr, low, height) {
        if (low >= height) return;
        var mid = (height + low) / 2;
        sort(arr, low, mid);
        sort(arr, mid + 1, height);
        merge(arr, low, mid, height - 1);
    }

    function merge(arr, low, mid, height) {
        var s1 = low;
        var s2 = mid + 1;
        var temp = [];
        var i = 0;
        while (s1 <= mid && s2 <= height) {
            if (arr[s1] < arr[s2]) {
                temp[i++] = arr[s1++];
            } else {
                temp[i++] = arr[s2++];
            }
        }

        while (s1 <= mid) {
            temp[i++] = arr[s1++];
        }

        while (s2 <= mid) {
            temp[i++] = arr[s2++];
        }

        for (let j = 0; j < temp.length; j++) {
            arr[low + j] = temp[j]
        }
    }

    sort(gb, 0, gb.length - 1)

}

a()

// shell排序
var shell = [1, 10, 9, 11, 1]
for (let i = shell.length / 2; i >= 1; i /= 2) {
    for (let j = i; j < shell.length; j++) {
        var now = shell[j];
        var tm = j - i;
        if (tm >= 0 && now < shell[tm]) {
            shell[j + i] = shell[j]
            j -= i;
        }
        shell[j + i] = now;
    }
}
console.log('shell',shell)


