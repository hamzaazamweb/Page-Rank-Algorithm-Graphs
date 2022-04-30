class Matrix {
  transposeAMatrix(matrix) {
    let newArray = [];
    let arrayLength = matrix.length;
    newArray = matrix.reduce(
      (prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),
      []
    );
    return newArray;
  }
  scalarProductMat(mat, k) {
    // scalar element is multiplied by the matrix
    for (var i = 0; i < mat[0].length; i++)
      for (var j = 0; j < mat[0].length; j++) mat[i][j] = mat[i][j] * k;

    return mat;
  }
  addScalarValue(mat, k) {
    // scalar element is multiplied by the matrix
    for (var i = 0; i < mat[0].length; i++)
      for (var j = 0; j < mat[0].length; j++) mat[i][j] = mat[i][j] + k;

    return mat;
  }
  multiplyMatrices(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
      throw new Error("arguments should be in 2-dimensional array format");
    }
    let x = a.length,
      z = a[0].length,
      y = b[0].length;
    if (b.length !== z) {
      // XxZ & ZxY => XxY
      throw new Error(
        "number of columns in the first matrix should be the same as the number of rows in the second"
      );
    }
    let productRow = Array.apply(null, new Array(y)).map(
      Number.prototype.valueOf,
      0
    );
    let product = new Array(x);
    for (let p = 0; p < x; p++) {
      product[p] = productRow.slice();
    }
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        for (let k = 0; k < z; k++) {
          product[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    return product;
  }
  getPowerOfMatrix(a, power) {
    let matrix = a;
    for (let j = 2; j <= power; j++) {
      matrix = this.multiplyMatrices(matrix, a);
    }
    return matrix;
  }
}

const matrix = new Matrix();

module.exports = matrix;
