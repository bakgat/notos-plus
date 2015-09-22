<h1>Paswoord wijzigen</h1>
<p>
<form ng-submit="reset()">
    <div class="form-group">
        <input type="password" placeholder="Oud paswoord" class="form-control" name="old_password" required>
    </div>
    <div class="form-group">
        <input type="password" placeholder="Nieuw paswoord" class="form-control" name="new_password" required>
    </div>
    <div class="form-group">
        <input type="password" placeholder="Bevestig paswoord" class="form-control" name="cofirm_password" required>
    </div>
    <div class="row">
        <div class="col-md-6">
            <button type="button" class="btn btn-default btn-sm btn-block">Annuleren</button>
        </div>
        <div class="col-md-6">
            <button type="submit" class="btn btn-warning btn-sm btn-block">Wijzigen</button>
        </div>
    </div>
</form>
</p>