


function firstContainer() {
    const container = document.getElementById("container")
    const data =
        `
      <div class="container">
          <h1> JavaScript CRUD</h1>
      </div>
      <div class="container">
        <div class="mb-5">
            <div class="row">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Correo Electronico</label>
                        <input type="email" class="form-control" id="imputEmail" placeholder="Correo Electronico">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nombre Completo</label>
                        <input type="text" class="form-control" id="imputName" placeholder="Nombre Completo">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Telefono</label>
                        <input type="number" class="form-control" id="imputPhone" placeholder="Telefono">
                    </div>
                        <button type="submit" class="btn btn-primary" id="btnAdd" ${onclick="addData()"}> Enviar datos</button>
                        <button type="submit" class="btn btn-primary" id="btnUpdate">Actualizar datos</button>
                </form>
            </div>
            <hr>
            <table class="table table-border" id="tableData">
                <thead>
                    <tr>
                        <th>Correo</th>
                        <th>Nombre Completo</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
      </div>
    `
    container.innerHTML = data
}

firstContainer();

