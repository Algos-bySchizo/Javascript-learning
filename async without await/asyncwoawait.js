// asyncTest.js

// Simulate async task
function asyncTask(name, succeed = true, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succeed) resolve(`${name} ✅ done`);
      else reject(`${name} ❌ failed`);
    }, delay);
  });
}

// 1️⃣ Without try/catch
async function testWithoutTryCatch() {
  console.log('\n--- Test 1: Without try/catch ---');
  const a = await asyncTask('Task 1');          // succeeds
  const b = await asyncTask('Task 2', false);   // fails
  const c = await asyncTask('Task 3');          // never runs
  console.log(a, b, c);
}

// 2️⃣ With single try/catch
async function testWithTryCatch() {
  console.log('\n--- Test 2: Single try/catch ---');
  try {
    const a = await asyncTask('Task 1');        // succeeds
    const b = await asyncTask('Task 2', false); // fails
    const c = await asyncTask('Task 3');        // never runs
    console.log(a, b, c);
  } catch (err) {
    console.log('Caught error:', err);
  }
}

// 3️⃣ With separate try/catch
async function testSeparateTryCatch() {
  console.log('\n--- Test 3: Separate try/catch ---');

  try {
    const a = await asyncTask('Task 1');
    console.log(a);
  } catch (err) {
    console.log(err);
  }

  try {
    const b = await asyncTask('Task 2', false); // fails
    console.log(b);
  } catch (err) {
    console.log(err);
  }

  try {
    const c = await asyncTask('Task 3');
    console.log(c);
  } catch (err) {
    console.log(err);
  }
}

// Run all tests sequentially with delays
(async () => {
  await testWithoutTryCatch().catch(err => console.log('Uncaught error:', err));
  await new Promise(res => setTimeout(res, 2000)); // wait 2s
  await testWithTryCatch();
  await new Promise(res => setTimeout(res, 2000));
  await testSeparateTryCatch();
})();