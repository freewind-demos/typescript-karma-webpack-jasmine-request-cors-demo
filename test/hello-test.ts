import hello from '../src/hello'
import axios from 'axios';

describe('hello', function () {

  it('should return hello words for a given name', async () => {
    const response = await axios.get<string>('https://github.com/')
    console.log(response.data);
    expect(response.data.length).toBeGreaterThan(0);
  })

})
